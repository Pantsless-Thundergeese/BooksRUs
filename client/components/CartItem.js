import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';


const CartItem = (props) => {
  const removeFromCart = useStoreActions(
    (actions) => actions.removeFromCart
  );
  return (
      
    <div className="centered cart-item">

      <div>
        <h4>Book Name: {props.book.name} </h4>
        <img src={props.book.imageUrl} />
        <h4>ISBN-10: {props.book.isbn}</h4>
        <h4>Price: {props.book.price}</h4>

        <h4>
          Description: {props.book.descriptionStr}...
          <a href={props.book.moreInfo}>More Info</a>
        </h4>

        <button onClick={() => {removeFromCart(props.book); e.target.style.display = 'none'}}>Remove</button>
        <br></br>
      </div>

    </div>
  )
}

export default CartItem
//name
//price
//picture
//item quanity
//remove button 
