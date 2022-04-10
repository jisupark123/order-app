import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import { IMeal } from '../dummy-meals';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

interface IMealItemProps {
  meal: IMeal;
}

const MealItem: React.FC<IMealItemProps> = ({ meal }) => {
  const cartCtx = useContext(CartContext);
  const price = `$${meal.price.toFixed(2)}`;
  const addToCartHandler = (amount: number) => {
    cartCtx?.addItem({
      id: meal.id,
      name: meal.name,
      amount,
      price: meal.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm inputId={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
