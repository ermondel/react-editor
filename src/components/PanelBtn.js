import React from 'react';

const PanelBtn = ({ click, title = '', val, mod = '', disabled = false }) => {
  let className = 'panel__btn';

  if (mod) {
    className += ` ${className}--${mod}`;
  }

  return (
    <button onClick={click} title={title} className={className} disabled={disabled}>
      {val}
    </button>
  );
};

export default PanelBtn;
