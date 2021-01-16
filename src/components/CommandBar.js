import React from 'react';
import BtnSym from './BtnSym';
import BtnImg from './BtnImg';
import IconPaste from './IconPaste';
import IconDiscard from './IconDiscard';
import IconUndo from './IconUndo';
import IconSquare from './IconSquare';
import BtnCircle from './BtnCircle';
import { keys } from '../config/keys';

const CommandBar = (props) => (
  <div className='command-bar'>
    <div className='command-bar__panel'>
      <BtnSym
        click={(e) => props.action(keys.key101.code, e)}
        title={`${keys.key101.title.en} ${keys.key101.shortcut}`}
      >
        B
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key102.code, e)}
        title={`${keys.key102.title.en} ${keys.key102.shortcut}`}
      >
        I
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key103.code, e)}
        title={`${keys.key103.title.en} ${keys.key103.shortcut}`}
      >
        S
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key104.code, e)}
        title={`${keys.key104.title.en} ${keys.key104.shortcut}`}
      >
        U
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key105.code, e)}
        title={`${keys.key105.title.en} ${keys.key105.shortcut}`}
      >
        <IconSquare />
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key201.code, e)}
        title={`${keys.key201.title.en} ${keys.key201.shortcut}`}
      >
        AA
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key202.code, e)}
        title={`${keys.key202.title.en} ${keys.key202.shortcut}`}
      >
        aa
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key501.code, e)}
        title={`${keys.key501.title.en} ${keys.key501.shortcut}`}
      >
        T_
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key401.code, e)}
        title={`${keys.key401.title.en} ${keys.key401.shortcut}`}
      >
        &f
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key301.code, e)}
        title={`${keys.key301.title.en} ${keys.key301.shortcut}`}
        disabled={props.text.indexOf('\n') < 0}
      >
        @
      </BtnSym>
    </div>

    <div className='command-bar__panel'>
      <BtnImg
        click={(e) => props.action(keys.key903.code, e)}
        title={`${keys.key903.title.en} ${keys.key903.shortcut}`}
        disabled={!props.text.length}
      >
        <IconPaste />
      </BtnImg>

      <BtnImg
        click={(e) => props.action(keys.key902.code, e)}
        title={`${keys.key902.title.en} ${keys.key902.shortcut}`}
        disabled={props.historyLength <= 0}
      >
        <IconDiscard />
      </BtnImg>

      <BtnImg
        click={(e) => props.action(keys.key901.code, e)}
        title={`${keys.key901.title.en} ${keys.key901.shortcut}`}
        disabled={props.historyLength <= 0}
      >
        <IconUndo />
      </BtnImg>

      <BtnCircle
        click={(e) => props.action(keys.key904.code, e)}
        title={`${keys.key904.title.en} ${keys.key904.shortcut}`}
        active={props.allText}
      >
        mode
      </BtnCircle>
    </div>
  </div>
);

export default CommandBar;
