import React from 'react';
import Modal from './../UI/Modal';
import './Cart.css';

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: 2, name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>35.65</span>
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        <button className="button--order">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
