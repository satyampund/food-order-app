import React from 'react';
import './MealItemForm.css';
import Input from './../../UI/Input';

const MealItemForm = (props) => {
  return (
    <form className="form">
      <Input
        lable="Amount"
        input={{ id: 'Amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
