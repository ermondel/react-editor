import React from 'react';

const BtnStr = ({ click, title = '', disabled = false, children }) => (
  <button
    onClick={click}
    title={title}
    className='command-bar__btn'
    disabled={disabled}
  >
    {children}
  </button>
);

export default BtnStr;
