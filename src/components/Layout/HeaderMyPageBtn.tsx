import React from 'react';
import classes from './HeaderMyPageBtn.module.css';

interface IHeaderMyPageBtnProps {
  onShowMyPage: () => void;
}

const HeaderMyPageBtn: React.FC<IHeaderMyPageBtnProps> = (props) => {
  return (
    <button className={classes.button} onClick={props.onShowMyPage}>
      <span>My</span>
    </button>
  );
};

export default HeaderMyPageBtn;
