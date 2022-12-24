import React, { useContext } from 'react';
import CardIcon from './../Cart/CartIcon';
import './HeaderCartButton.css';
import CartContext from './../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <>
      <button className="button" onClick={props.onClick}>
        <span className="icon">
          <CardIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
