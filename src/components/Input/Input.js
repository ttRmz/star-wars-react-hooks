import React from 'react';
import './Input.scss';

const Input = ({ className, type, ...props }) => (
  <input className="fetchPeople__input" type="text" {...props} />
);

export default Input;
