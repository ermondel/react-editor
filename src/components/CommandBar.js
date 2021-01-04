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
      <BtnSym click={() => props.action(10)} title='Bold [Alt+B]'>
        B
      </BtnSym>

      <BtnSym click={() => props.action(11)} title='Italic [Alt+I]'>
        I
      </BtnSym>

      <BtnSym click={() => props.action(12)} title='Strikethrough [Alt+S]'>
        S
      </BtnSym>

      <BtnSym click={() => props.action(13)} title='Underline [Alt+U]'>
        U
      </BtnSym>

      <BtnSym click={() => props.action(14)} title='Spoiler [Alt+P]'>
        &#9632;
      </BtnSym>

      <BtnSym click={() => props.action(20)} title='Uppercase [Alt+↑]'>
        AA
      </BtnSym>

      <BtnSym click={() => props.action(21)} title='Lowercase [Alt+↓]'>
        aa
      </BtnSym>

      <BtnSym click={() => props.action(30)} title='@ list [Alt+J]'>
        @
      </BtnSym>

      <BtnSym click={() => props.action(40)} title='format as filename [Alt+N]'>
        &f
      </BtnSym>

      <BtnImg click={props.clipboard} title='Add to clipboard [Alt+Q]'>
        <IconPaste />
      </BtnImg>

      <BtnImg
        click={props.discard}
        title='Undo all [Alt+X]'
        disabled={!props.showRollback}
      >
        <IconDiscard />
      </BtnImg>

      <BtnImg click={props.undo} title='Undo [Alt+Z]' disabled={!props.showRollback}>
        <IconUndo />
      </BtnImg>
    </div>

    <div className='command-bar__aside'>
      <BtnStr
        click={props.switchMode}
        title='Apply to all text ( Alt + [ )'
        disabled={props.allText}
      >
        all text
      </BtnStr>

      <BtnStr
        click={props.switchMode}
        title='Apply to selected text ( Alt + ] )'
        disabled={!props.allText}
      >
        selected text
      </BtnStr>
    </div>
  </div>
);

export default CommandBar;
