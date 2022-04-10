import React, { useContext } from 'react';
import CartContext, { Item } from '../../store/cart-context';
import WalletContext from '../../store/wallet-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

interface ICartProps {
  onClose: () => void;
}

const Cart: React.FC<ICartProps> = (props) => {
  const cartCtx = useContext(CartContext);
  const walletCtx = useContext(WalletContext);
  const totalAmount = `$${
    walletCtx && walletCtx.stamp === 7 ? '0' : cartCtx?.totalAmount.toFixed(2)
  }`;
  const myMoney = +walletCtx.totalMoney.toFixed(2);
  const hasItems = cartCtx?.items.length;
  const cartItemRemoveHandler = (id: string) => {
    cartCtx?.removeItem(id);
  };
  const cartItemAddHandler = (item: Item) => {
    cartCtx?.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx?.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const orderMealsHandler = () => {
    if (!cartCtx) return;
    const totalAmountNum = walletCtx.stamp === 7 ? 0 : +cartCtx.totalAmount;
    if (myMoney >= totalAmountNum) {
      walletCtx.orderMeals(totalAmountNum);
      cartCtx.removeAll();
      alert('Order Success');
      props.onClose();
    } else {
      alert("You're short of money");
    }
  };
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes['my-money']}>
        <span>My Money</span>
        <span>{`$${myMoney}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderMealsHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
