import React from 'react';

const BtnSym = ({ click, title = '', disabled = false, children }) => (
  <button
    onClick={click}
    title={title}
    className='command-bar__btn'
    disabled={disabled}
  >
    {children}
  </button>
);

export default BtnSym;
