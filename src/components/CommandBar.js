import React from 'react';
import BtnStr from './BtnStr';
import BtnImg from './BtnImg';
import IconPaste from './IconPaste';
import IconDiscard from './IconDiscard';
import IconUndo from './IconUndo';

const CommandBar = ({ action, showRollback, discard, undo }) => (
  <div className='command-bar'>
    <BtnStr click={() => action(10)} title='bold'>
      B
    </BtnStr>

    <BtnStr click={() => action(11)} title='italic'>
      I
    </BtnStr>

    <BtnStr click={() => action(12)} title='strikethrough'>
      S
    </BtnStr>

    <BtnStr click={() => action(13)} title='underline'>
      U
    </BtnStr>

    <BtnStr click={() => action(14)} title='spoiler'>
      &#9632;
    </BtnStr>

    <BtnStr click={() => action(20)} title='uppercase'>
      AA
    </BtnStr>

    <BtnStr click={() => action(21)} title='lowercase'>
      aa
    </BtnStr>

    <BtnStr click={() => action(30)} title='@ list'>
      @
    </BtnStr>

    <BtnStr click={() => action(40)} title='format as filename'>
      &f
    </BtnStr>

    <BtnImg click={() => action(50)} title='add to clipboard'>
      <IconPaste />
    </BtnImg>

    <BtnImg click={discard} title='discard all changes' disabled={!showRollback}>
      <IconDiscard />
    </BtnImg>

    <BtnImg click={undo} title='undo' disabled={!showRollback}>
      <IconUndo />
    </BtnImg>
  </div>
);

export default CommandBar;
