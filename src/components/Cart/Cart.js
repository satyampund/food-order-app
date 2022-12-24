import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: 2, name: 'Sushi' }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>35.65</span>
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        <button className="button">Order</button>
      </div>
    </div>
  );
};

export default Cart;
