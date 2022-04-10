import React, { useContext } from 'react';
import WalletContext from '../../store/wallet-context';
import Modal from '../UI/Modal';
import classes from './MyPage.module.css';

interface IMyPageProps {
  onClose: () => void;
}

const MyPage: React.FC<IMyPageProps> = (props) => {
  const walletCtx = useContext(WalletContext);
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.wrapper}>
        <div className={classes.money}>
          <span>Total Money</span>
          <span>{`$${walletCtx.totalMoney.toFixed(2)}`}</span>
        </div>
        <div className={classes.coupon}>
          <span>Coupon</span>
          <ul className={classes.stamps}>
            {[1, 2, 3, 4, 5, 6, 7].map((idx) => (
              <li key={idx} className={classes.stamp}>
                {idx <= walletCtx.stamp ? '😆' : '☠️'}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default MyPage;
