import React from 'react';
import { bbcodeToHTML } from '../editor';

const Preview = ({ text }) => (
  <div
    className='preview'
    dangerouslySetInnerHTML={{
      __html: bbcodeToHTML(text),
    }}
  ></div>
);

export default Preview;
