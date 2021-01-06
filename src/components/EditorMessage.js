import React from 'react';

const EditorMessage = ({ message }) => {
  return message ? (
    <span className='editor__message' title={message}>
      {message}
    </span>
  ) : null;
};

export default EditorMessage;
