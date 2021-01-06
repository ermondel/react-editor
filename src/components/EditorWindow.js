import React from 'react';

const EditorWindow = (props) => (
  <textarea
    ref={props.editorRef}
    value={props.text}
    className='editor__textarea'
    onChange={props.onEditorChange}
    onKeyDown={props.onEditorKeyDown}
    onSelect={props.onEditorTextSelect}
  ></textarea>
);

export default EditorWindow;
