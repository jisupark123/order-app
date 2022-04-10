import React from 'react';
import classes from './Card.module.css';

interface ICardProps {}

const Card: React.FC<ICardProps> = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
