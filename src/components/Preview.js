import React from 'react';
import { bbcode2html } from '../lib/fstring';

const Preview = ({ text }) => (
  <div
    className='preview'
    dangerouslySetInnerHTML={{
      __html: bbcode2html(text),
    }}
  ></div>
);

export default Preview;
