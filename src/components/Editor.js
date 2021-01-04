import React from 'react';
import StatusBar from './StatusBar';

const Editor = (props) => (
  <div className='editor'>
    <StatusBar
      text={props.text}
      selectionStart={props.selectionStart}
      selectionEnd={props.selectionEnd}
      message={props.message}
    />

    <textarea
      className='editor__textarea'
      value={props.text}
      onChange={props.onChange}
      onSelect={props.onSelect}
      ref={props.editorRef}
      onKeyDown={props.onKeyDown}
    ></textarea>
  </div>
);

export default Editor;
