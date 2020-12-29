import React from 'react';
import BtnSym from './BtnSym';
import BtnImg from './BtnImg';
import BtnStr from './BtnStr';
import IconPaste from './IconPaste';
import IconDiscard from './IconDiscard';
import IconUndo from './IconUndo';

const CommandBar = (props) => (
  <div className='command-bar'>
    <div className='command-bar__main'>
      <BtnSym click={() => props.action(10)} title='bold'>
        B
      </BtnSym>

      <BtnSym click={() => props.action(11)} title='italic'>
        I
      </BtnSym>

      <BtnSym click={() => props.action(12)} title='strikethrough'>
        S
      </BtnSym>

      <BtnSym click={() => props.action(13)} title='underline'>
        U
      </BtnSym>

      <BtnSym click={() => props.action(14)} title='spoiler'>
        &#9632;
      </BtnSym>

      <BtnSym click={() => props.action(20)} title='uppercase'>
        AA
      </BtnSym>

      <BtnSym click={() => props.action(21)} title='lowercase'>
        aa
      </BtnSym>

      <BtnSym click={() => props.action(30)} title='@ list'>
        @
      </BtnSym>

      <BtnSym click={() => props.action(40)} title='format as filename'>
        &f
      </BtnSym>

      <BtnImg click={props.clipboard} title='add to clipboard'>
        <IconPaste />
      </BtnImg>

      <BtnImg click={props.discard} title='undo all' disabled={!props.showRollback}>
        <IconDiscard />
      </BtnImg>

      <BtnImg click={props.undo} title='undo' disabled={!props.showRollback}>
        <IconUndo />
      </BtnImg>
    </div>

    <div className='command-bar__aside'>
      <BtnStr
        click={props.switchMode}
        title='apply to all text'
        disabled={props.allText}
      >
        all text
      </BtnStr>

      <BtnStr
        click={props.switchMode}
        title='apply to selected text'
        disabled={!props.allText}
      >
        selected text
      </BtnStr>
    </div>
  </div>
);

export default CommandBar;
