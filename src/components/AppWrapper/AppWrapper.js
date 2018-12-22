import React from 'react';
import './AppWrapper.scss';

const AppWrapper = ({ ...props }) => (
  <div className="app__wrapper" {...props} />
);

export default AppWrapper;
