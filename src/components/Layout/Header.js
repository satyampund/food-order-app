import React from 'react';
import mealsImage from './../../assests/meals.jpg';
import './Header.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="meals table" />
      </div>
    </>
  );
};

export default Header;
