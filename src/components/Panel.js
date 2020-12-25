import React from 'react';
import PanelBtn from './PanelBtn';

const Panel = (props) => (
  <div className='panel'>
    <div className='panel__main'>
      <PanelBtn click={() => props.addTag('B')} title='bold' val='B' />
      <PanelBtn click={() => props.addTag('I')} title='italic' val='I' />
      <PanelBtn click={() => props.addTag('S')} title='strikethrough' val='S' />
      <PanelBtn
        click={() => props.addTag('SPOILER')}
        title='spoiler'
        val='&#9632;'
      />
      <PanelBtn click={() => props.changeCase(true)} title='uppercase' val='AA' />
      <PanelBtn click={() => props.changeCase(false)} title='lowercase' val='aa' />
      <PanelBtn click={() => props.splitText('@')} title='@ list' val='@' />
      <PanelBtn
        click={() => props.formatAsFilename('@')}
        title='format as filename'
        val='F'
      />
      <PanelBtn
        click={() => props.addToClipboard()}
        title='add to clipboard'
        val='#'
      />
      <PanelBtn
        click={() => props.discardChanges()}
        title='discard changes'
        val='C'
        disabled={!props.historyLength}
      />
      <PanelBtn
        click={props.undo}
        title='undo'
        val='U'
        disabled={!props.historyLength}
      />
    </div>
  </div>
);

export default Panel;
