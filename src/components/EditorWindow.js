import React from 'react';

const EditorWindow = (props) => (
  <textarea
    ref={props.editorRef}
    value={props.text}
    className='editor__textarea'
    onChange={props.onEditorChange}
    onSelect={props.onEditorTextSelect}
    onPaste={props.onEditorPaste}
    onCut={props.onEditorCut}
    onKeyUp={props.onEditorKeyUp}
    onKeyDown={props.onEditorKeyDown}
  ></textarea>
);

export default EditorWindow;
