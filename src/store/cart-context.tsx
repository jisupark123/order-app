import React from 'react';

export interface Item {
  id: string;
  name: string;
  price: number;
  amount: number;
}

export interface ICartContext {
  items: Item[];
  totalAmount: number;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const CartContext = React.createContext<ICartContext | undefined>(undefined);

// const CartContext = React.createContext({
//   items: [],
//   totalAmount: 0,
//   addItem: () => {},
//   removeItem: () => {},
// });

export default CartContext;
