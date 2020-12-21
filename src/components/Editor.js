import React from 'react';

const Editor = ({ text, onChange, onSelect, editorRef }) => (
  <div>
    <textarea
      id='editor'
      className='editor'
      value={text}
      onChange={onChange}
      onSelect={onSelect}
      ref={editorRef}
    ></textarea>
  </div>
);

export default Editor;
