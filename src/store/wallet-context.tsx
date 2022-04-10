import React from 'react';

export interface IWallet {
  totalMoney: number;
  stamp: number;
  orderMeals: (price: number) => void;
}

const WalletContext = React.createContext<IWallet>({
  totalMoney: 500,
  stamp: 0,
  orderMeals: (price: number) => {},
});

export default WalletContext;
