import React from 'react';
import { bbcodeToHTML } from '../bbcode';

const Preview = ({ text }) => (
  <div
    className='preview'
    dangerouslySetInnerHTML={{
      __html: bbcodeToHTML(text),
    }}
  ></div>
);

export default Preview;
