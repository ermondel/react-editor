import React from 'react';

const BtnImg = ({ click, title = '', disabled = false, children }) => (
  <button
    onClick={click}
    title={title}
    className='command-bar__btn-img'
    disabled={disabled}
  >
    {children}
  </button>
);

export default BtnImg;
