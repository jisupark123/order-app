import React, { useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

interface IMealItemFormProps {
  inputId: string;
  onAddToCart: (amount: number) => void;
}
const MealItemForm: React.FC<IMealItemFormProps> = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [enteredAmount, setEnteredAmount] = useState('1');
  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    setEnteredAmount(event.currentTarget.value);
  };
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        onChange={onChangeHandler}
        label='Amount'
        input={{
          id: 'amount_' + props.inputId,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1~5)</p>}
    </form>
  );
};

export default MealItemForm;
