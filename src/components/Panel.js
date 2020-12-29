import React from 'react';
import PanelBtn from './PanelBtn';
import undoIcon from '../assets/images/undo.svg';
import pasteIcon from '../assets/images/paste.svg';
import discardIcon from '../assets/images/discard.svg';

const Panel = ({ action, showRollback, discard, undo }) => {
  const undoImg = <img src={undoIcon} alt='undo' className='panel__icon' />;

  const pasteImg = (
    <img src={pasteIcon} alt='add to clipboard' className='panel__icon' />
  );

  const discardImg = <img src={discardIcon} alt='discard' className='panel__icon' />;

  return (
    <div className='panel'>
      <div className='panel__main'>
        <PanelBtn click={() => action(10)} title='bold' val='B' />
        <PanelBtn click={() => action(11)} title='italic' val='I' />
        <PanelBtn click={() => action(12)} title='strikethrough' val='S' />
        <PanelBtn click={() => action(13)} title='underline' val='U' />
        <PanelBtn click={() => action(14)} title='spoiler' val='&#9632;' />
        <PanelBtn click={() => action(20)} title='uppercase' val='AA' />
        <PanelBtn click={() => action(21)} title='lowercase' val='aa' />
        <PanelBtn click={() => action(30)} title='@ list' val='@' />
        <PanelBtn click={() => action(40)} title='format as filename' val='&f' />
        <PanelBtn click={() => action(50)} title='add to clipboard' val={pasteImg} />
        <PanelBtn
          click={discard}
          title='discard'
          val={discardImg}
          disabled={!showRollback}
        />
        <PanelBtn click={undo} title='undo' val={undoImg} disabled={!showRollback} />
      </div>
    </div>
  );
};

export default Panel;
