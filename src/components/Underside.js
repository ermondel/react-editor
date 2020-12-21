import React from 'react';

const Underside = ({ switchMode, allText }) => (
  <div>
    <label className='panel__chkbox'>
      <input type='checkbox' name='mode' onChange={switchMode} checked={allText} />{' '}
      Apply to all text
    </label>
  </div>
);

export default Underside;
