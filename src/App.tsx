import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import MyPage from './components/MyPage/MyPage';
import CartProvider from './store/CartProvider';
import WalletProvider from './store/WalletProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [myPageIsShown, setMyPageIsShown] = useState(false);
  const showCartHandler = (pageName: 'Cart' | 'MyPage') => {
    if (pageName === 'Cart') setCartIsShown(true);
    else setMyPageIsShown(true);
  };
  const hideCartHandler = (pageName: 'Cart' | 'MyPage') => {
    if (pageName === 'Cart') setCartIsShown(false);
    else setMyPageIsShown(false);
  };
  return (
    <WalletProvider>
      <CartProvider>
        {cartIsShown && <Cart onClose={() => hideCartHandler('Cart')} />}
        {myPageIsShown && <MyPage onClose={() => hideCartHandler('MyPage')} />}
        <Header
          onShowCart={() => showCartHandler('Cart')}
          onShowMyPage={() => showCartHandler('MyPage')}
        />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </WalletProvider>
  );
}

export default App;
