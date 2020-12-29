import React from 'react';
import BtnSym from './BtnSym';
import BtnImg from './BtnImg';
import BtnStr from './BtnStr';
import IconPaste from './IconPaste';
import IconDiscard from './IconDiscard';
import IconUndo from './IconUndo';

const CommandBar = ({
  action,
  showRollback,
  discard,
  undo,
  allText,
  switchMode,
}) => (
  <div className='command-bar'>
    <div className='command-bar__main'>
      <BtnSym click={() => action(10)} title='bold'>
        B
      </BtnSym>

      <BtnSym click={() => action(11)} title='italic'>
        I
      </BtnSym>

      <BtnSym click={() => action(12)} title='strikethrough'>
        S
      </BtnSym>

      <BtnSym click={() => action(13)} title='underline'>
        U
      </BtnSym>

      <BtnSym click={() => action(14)} title='spoiler'>
        &#9632;
      </BtnSym>

      <BtnSym click={() => action(20)} title='uppercase'>
        AA
      </BtnSym>

      <BtnSym click={() => action(21)} title='lowercase'>
        aa
      </BtnSym>

      <BtnSym click={() => action(30)} title='@ list'>
        @
      </BtnSym>

      <BtnSym click={() => action(40)} title='format as filename'>
        &f
      </BtnSym>

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

    <div className='command-bar__aside'>
      <BtnStr click={switchMode} title='apply to all text' disabled={allText}>
        all text
      </BtnStr>

      <BtnStr click={switchMode} title='apply to selected text' disabled={!allText}>
        selected text
      </BtnStr>
    </div>
  </div>
);

export default CommandBar;
