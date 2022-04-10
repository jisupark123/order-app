import React, { HTMLInputTypeAttribute } from 'react';
import classes from './Input.module.css';

interface IInputProps {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  label: string;
  input: {
    id: string;
    type: HTMLInputTypeAttribute;
    min: string;
    max: string;
    step: string;
    defaultValue: '1';
  };
}

const Input: React.FC<IInputProps> = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} onChange={props.onChange} />
    </div>
  );
};

export default Input;
