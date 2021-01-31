import React from 'react';
import EditorMessage from './EditorMessage';
import { strnetlen } from '../lib/fstring';

const StatusBar = (props) => {
  const titles = {
    ctn: 'Total number of characters',
    cws: 'Number of characters without any spaces',
    csc: 'Number of selected characters',
  };

  return (
    <div className='editor__status-bar'>
      <span className='editor__counter' title={titles.ctn}>
        {props.text.length}
      </span>

      <span className='editor__counter' title={titles.cws}>
        {strnetlen(props.text)}
      </span>

      <span className='editor__counter' title={titles.csc} ref={props.editorCSCRef}>
        0
      </span>

      <EditorMessage message={props.message} />
    </div>
  );
};

export default StatusBar;
