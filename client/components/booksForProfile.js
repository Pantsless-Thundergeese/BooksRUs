import * as React from 'react';
import Comment from './Comments';
import { useStoreState, useStoreActions } from 'easy-peasy';

export default function ProfileBooks(props) {
  const user = useStoreState(state => state.user);
  const updateLikedBooks = useStoreActions(actions => actions.updateLikedBooks)

  function handleBookUnlike() {
    console.log("Unliking book: ", props.book.isbn) 

   fetch('/books/unlike', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isbn: props.book.isbn,
        title: props.book.name,
        email: user.email,
      })
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('RETURNED DATA UNLIKE:  ',data);
        if (data.length >= 0) {
          updateLikedBooks(data);
        }
      }/*updateUser(data)*/)
      // .then((data) => updateUser(data))
      .catch(err => console.log('error in /books/like'))

  }
  // shortening description return string in search
  let descriptionStr;
  if (props.book.description) {
    if (props.book.description.length > 250) {
      descriptionStr = props.book.description.substring(0, 250);
    } else {
      descriptionStr = props.book.description
    }
  }

  return (
    <div style={{ borderBottom: '1px solid black', margin:'1em' }}>
      <h4>  {props.book.name} </h4>
      <img src={props.book.imageUrl} />
      <h5>Author: {props.book.author}</h5>
      <h5>Price: {props.book.price}</h5>
      <h5>ISBN-10: {props.book.isbn}</h5>
      <h5>
        Description: {descriptionStr}...
        <a href={props.book.moreInfo}>More Info</a>
      </h5>
      <div className='centered'>
        <button className='centered search-button' onClick={handleBookUnlike}>
          Remove
        </button>
      </div>
      <br></br>
    </div>
  );
}
