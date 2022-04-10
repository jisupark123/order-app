import { useState } from 'react';
import WalletContext, { IWallet } from './wallet-context';

interface IWalletState {
  totalMoney: number;
  stamp: number;
}

const defaultWalletState: IWalletState = {
  totalMoney: 500,
  stamp: 0,
};

const WalletProvider: React.FC = (props) => {
  const [wallet, setWallet] = useState<IWalletState>(defaultWalletState);
  const orderMealsHandler = (price: number) => {
    setWallet({
      totalMoney: wallet.totalMoney - price,
      stamp: wallet.stamp === 7 ? 0 : wallet.stamp + 1,
    });
  };

  const walletContext: IWallet = {
    totalMoney: wallet.totalMoney,
    stamp: wallet.stamp,
    orderMeals: orderMealsHandler,
  };
  return (
    <WalletContext.Provider value={walletContext}>
      {props.children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
