import React from 'react';
import BtnSym from './BtnSym';
import BtnImg from './BtnImg';
import IconPaste from './IconPaste';
import IconDiscard from './IconDiscard';
import IconUndo from './IconUndo';
import BtnCircle from './BtnCircle';

const CommandBar = (props) => {
  let modTitle = `mode switch\n
  Applying formatting\n
  - all text [Alt+K] ${props.allText ? '(current mode)' : ''}
  or
  - selected text [Alt+L] ${!props.allText ? '(current mode)' : ''}`;

  return (
    <div className='command-bar'>
      <div className='command-bar__panel'>
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
      </div>

      <div className='command-bar__panel'>
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

        <BtnImg
          click={props.undo}
          title='Undo [Alt+Z]'
          disabled={!props.showRollback}
        >
          <IconUndo />
        </BtnImg>

        <BtnCircle click={props.switchMode} title={modTitle} active={props.allText}>
          mode
        </BtnCircle>
      </div>
    </div>
  );
};

export default CommandBar;
