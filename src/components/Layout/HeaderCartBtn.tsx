import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartBtn.module.css';

interface IHeaderCartBtnProps {
  onClick: () => void;
}

type TItem = {
  amount: number;
};

const HeaderCartBtn: React.FC<IHeaderCartBtnProps> = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const items = cartCtx ? cartCtx.items : undefined;
  const numberOfCartItems = cartCtx
    ? cartCtx.items.reduce((curNumber: number, item: TItem) => {
        return curNumber + item.amount;
      }, 0)
    : 0;
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;
  useEffect(() => {
    if (cartCtx?.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
