import React from 'react';
import PanelBtn from './PanelBtn';

const Panel = ({ addTag, changeCase, splitText, undo, historyLength }) => (
  <div className='panel'>
    <div className='panel__main'>
      <PanelBtn click={() => addTag('B')} title='bold' val='B' />
      <PanelBtn click={() => addTag('I')} title='italic' val='I' />
      <PanelBtn click={() => addTag('S')} title='strikethrough' val='S' />
      <PanelBtn click={() => addTag('SPOILER')} title='spoiler' val='&#9632;' />
      <PanelBtn click={() => changeCase(true)} title='uppercase' val='AA' />
      <PanelBtn click={() => changeCase(false)} title='lowercase' val='aa' />
      <PanelBtn click={() => splitText('@')} title='@ list' val='@' />
    </div>
    <div className='panel__aside'>
      <PanelBtn click={undo} val='undo' mod='undo' disabled={!historyLength} />
    </div>
  </div>
);

export default Panel;
