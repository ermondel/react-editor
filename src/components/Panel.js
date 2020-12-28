import React from 'react';
import PanelBtn from './PanelBtn';

const Panel = ({ action, showRollback, discard, undo }) => (
  <div className='panel'>
    <div className='panel__main'>
      <PanelBtn click={() => action(1)} title='bold' val='B' />
      <PanelBtn click={() => action(2)} title='italic' val='I' />
      <PanelBtn click={() => action(3)} title='strikethrough' val='S' />
      <PanelBtn click={() => action(10)} title='underline' val='U' />
      <PanelBtn click={() => action(4)} title='spoiler' val='&#9632;' />
      <PanelBtn click={() => action(5)} title='uppercase' val='AA' />
      <PanelBtn click={() => action(6)} title='lowercase' val='aa' />
      <PanelBtn click={() => action(7)} title='@ list' val='@' />
      <PanelBtn click={() => action(8)} title='add to clipboard' val='#' />
      <PanelBtn click={() => action(9)} title='format as filename' val='F' />
      <PanelBtn click={discard} title='discard' val='C' disabled={!showRollback} />
      <PanelBtn click={undo} title='undo' val='U' disabled={!showRollback} />
    </div>
  </div>
);

export default Panel;
