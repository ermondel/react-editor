import React from 'react';
import { lengthWithoutSpaces } from '../editor';

const CounterTotalNumber = (props) => (
  <span className='editor__counter' title='Total number of characters'>
    {props.text.length}
  </span>
);

const CounterWithoutSpaces = (props) => (
  <span className='editor__counter' title='Number of characters without any spaces'>
    {lengthWithoutSpaces(props.text)}
  </span>
);

const CounterSelectedCharacters = (props) => (
  <span className='editor__counter' title='Number of selected characters'>
    {props.x1 !== props.x2 ? props.x2 - props.x1 : 0}
  </span>
);

const SatusBarMessage = (props) => {
  return props.message ? (
    <span className='editor__message' title={props.message}>
      {props.message}
    </span>
  ) : null;
};

const StatusBar = (props) => {
  return (
    <div className='status-bar'>
      <CounterTotalNumber text={props.text} />
      <CounterWithoutSpaces text={props.text} />
      <CounterSelectedCharacters x1={props.selectionStart} x2={props.selectionEnd} />
      <SatusBarMessage message={props.message} />
    </div>
  );
};

export default StatusBar;
