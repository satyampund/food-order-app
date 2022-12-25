import React, { useRef, useState } from 'react';
import './MealItemForm.css';
import Input from './../../UI/Input';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        lable="Amount"
        input={{ id: 'Amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter the valid amount - 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
