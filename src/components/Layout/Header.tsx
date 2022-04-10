import React from 'react';
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpeg';
import HeaderCartBtn from './HeaderCartBtn';
import HeaderMyPageBtn from './HeaderMyPageBtn';

interface IHeaderProps {
  onShowCart: () => void;
  onShowMyPage: () => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Court</h1>
        <HeaderMyPageBtn onShowMyPage={props.onShowMyPage} />
        <HeaderCartBtn onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='A table full of delicious food!' />
      </div>
    </React.Fragment>
  );
};

export default Header;
