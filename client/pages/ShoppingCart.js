import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CartItem from '../components/CartItem';
import { useStoreState, useStoreActions } from 'easy-peasy';

export default function ShoppingCart() {
  const cart = useStoreState((state) => state.cart);
  const countries = ['USA', 'Canada'];
  const states = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Minor Outlying Islands',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'U.S. Virgin Islands',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
  const countryOptions = countries.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });
  const stateOptions = states.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });

  const cartItems = [];
  for (let i = 0; i < cart.length; i++) {
    const currentBook = cart[i];
    cartItems.push(<CartItem book={currentBook} key={i} />);
  }

  return (
    <div>
      <h2 className='centered'>Cart</h2>
      <div className='centered'>
        <div
          className='centered'
          style={{ flexDirection: 'column', width: '50%' }}
        >
          {cartItems}
        </div>
        {/* <Form> */}
      </div>
      <h3 className='centered' style={{ margin: '2em' }}>
        Shipping Address
      </h3>
      <div style={{ width: '70%' }} className='shipping-info-cards'>
        <div className='shipping-info-details'>
          <Form.Group className=' shipping-info'>
            <InputGroup
              fluid='true'
              name='firstname'
              label='First Name'
              placeholder='John'
            />
            <InputGroup
              fluid='true'
              name='lastname'
              label='Last name'
              placeholder='Smith'
            />
            <InputGroup
              fluid='true'
              name='email'
              label='Email'
              placeholder='xyz@example.com'
              type='email'
            />
          </Form.Group>
          <Form.Group className='shipping-info'>
            <Form.Control
              width={10}
              name='street'
              label='Address'
              placeholder='122 Example St'
            />
            <Form.Select
              width={6}
              name='country'
              label='Select Country'
              // add in an array to choose from for countries
            >
              <option>Select Country</option>
              {countryOptions}
            </Form.Select>
            {/* <Form.Text className='text-muted'>
          Select Country
        </Form.Text> */}
          </Form.Group>
          <Form.Group className='shipping-info'>
            <Form.Control
              width={6}
              name='town_city'
              label='Town/City'
              placeholder='Town/City'
            />
            <Form.Select
              width={6}
              label='County/State/Province/Territory'
              placeholder='Search ...'
              name='county_state'
              search
              fluid
            >
              <option>Select State</option>
              {stateOptions}
            </Form.Select>
            <Form.Control
              width={4}
              type='number'
              name='postal_zip_code'
              label='Zip/Postal'
              placeholder='Zip Code'
            />
          </Form.Group>
        </div>
      </div>
      {/* </Form> */}
    </div>
  );
}

// export default ShoppingCart
