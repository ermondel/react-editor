import React from 'react';

const BtnCircle = ({ click, title = '', active = false, children }) => {
  let className = 'command-bar__btn';

  if (active) {
    className += ' command-bar__btn--active';
  }

  return (
    <button onClick={click} title={title} className={className}>
      <div className='command-bar__circle'>
        <div className='command-bar__circle-inner'>
          <span className='hidden'>{children}</span>
        </div>
      </div>
    </button>
  );
};

export default BtnCircle;
