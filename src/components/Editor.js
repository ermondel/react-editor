import React from 'react';
import { lengthWithoutSpaces } from '../format';

const Editor = (props) => {
  let lengthSelected = 0;

  if (props.selectionStart !== props.selectionEnd) {
    lengthSelected = props.selectionEnd - props.selectionStart;
  }

  return (
    <div className='editor'>
      <div className='editor__counters'>
        <span className='editor__counter' title='Total number of characters'>
          {props.text.length}
        </span>
        <span
          className='editor__counter'
          title='Number of characters without any spaces'
        >
          {lengthWithoutSpaces(props.text)}
        </span>
        <span className='editor__counter' title='Number of selected characters'>
          {lengthSelected}
        </span>
      </div>

      <textarea
        className='editor__textarea'
        value={props.text}
        onChange={props.onChange}
        onSelect={props.onSelect}
        ref={props.editorRef}
      ></textarea>
    </div>
  );
};

export default Editor;
