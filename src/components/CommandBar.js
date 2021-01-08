import React from 'react';
import BtnSym from './BtnSym';
import BtnImg from './BtnImg';
import IconPaste from './IconPaste';
import IconDiscard from './IconDiscard';
import IconUndo from './IconUndo';
import BtnCircle from './BtnCircle';
import { keys } from '../config/keys';

const CommandBar = (props) => (
  <div className='command-bar'>
    <div className='command-bar__panel'>
      <BtnSym
        click={(e) => props.action(keys.key10.code, e)}
        title={`${keys.key10.title.en} ${keys.key10.shortcut}`}
      >
        B
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key11.code, e)}
        title={`${keys.key11.title.en} ${keys.key11.shortcut}`}
      >
        I
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key12.code, e)}
        title={`${keys.key12.title.en} ${keys.key12.shortcut}`}
      >
        S
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key13.code, e)}
        title={`${keys.key13.title.en} ${keys.key13.shortcut}`}
      >
        U
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key14.code, e)}
        title={`${keys.key14.title.en} ${keys.key14.shortcut}`}
      >
        &#9632;
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key20.code, e)}
        title={`${keys.key20.title.en} ${keys.key20.shortcut}`}
      >
        AA
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key21.code, e)}
        title={`${keys.key21.title.en} ${keys.key21.shortcut}`}
      >
        aa
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key30.code, e)}
        title={`${keys.key30.title.en} ${keys.key30.shortcut}`}
      >
        @
      </BtnSym>

      <BtnSym
        click={(e) => props.action(keys.key40.code, e)}
        title={`${keys.key40.title.en} ${keys.key40.shortcut}`}
      >
        &f
      </BtnSym>
    </div>

    <div className='command-bar__panel'>
      <BtnImg
        click={(e) => props.action(keys.key70.code, e)}
        title={`${keys.key70.title.en} ${keys.key70.shortcut}`}
      >
        <IconPaste />
      </BtnImg>

      <BtnImg
        click={(e) => props.action(keys.key51.code, e)}
        title={`${keys.key51.title.en} ${keys.key51.shortcut}`}
        disabled={props.historyLength <= 0}
      >
        <IconDiscard />
      </BtnImg>

      <BtnImg
        click={(e) => props.action(keys.key50.code, e)}
        title={`${keys.key50.title.en} ${keys.key50.shortcut}`}
        disabled={props.historyLength <= 0}
      >
        <IconUndo />
      </BtnImg>

      <BtnCircle
        click={(e) => props.action(keys.key80.code, e)}
        title={`${keys.key80.title.en} ${keys.key80.shortcut}`}
        active={props.allText}
      >
        mode
      </BtnCircle>
    </div>
  </div>
);

export default CommandBar;
