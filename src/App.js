import React, { Component } from 'react';
import CommandBar from './components/CommandBar';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { addTag, changeCase, splitText, filename } from './editor';

class App extends Component {
  state = {
    text: '',
    allText: false,
    message: '',
  };

  editorRef = React.createRef();
  editorHistory = [];
  editorSelectionStart = 0;
  editorSelectionEnd = 0;

  getText() {
    if (this.state.allText) {
      return this.state.text;
    }

    if (this.editorSelectionStart === this.editorSelectionEnd) {
      return '';
    }

    return this.editorRef.current.value.substring(
      this.editorSelectionStart,
      this.editorSelectionEnd
    );
  }

  setText(text, positionOffset) {
    if (this.state.allText) {
      this.setState({ text });

      return;
    }

    const start = this.editorSelectionStart;
    const end = this.editorSelectionEnd;

    this.editorRef.current.setRangeText(text, start, end, 'end');

    if (positionOffset && start === end) {
      this.editorRef.current.selectionStart = start + positionOffset;
      this.editorRef.current.selectionEnd = start + positionOffset;
    }

    this.editorSelectionStart = 0;
    this.editorSelectionEnd = 0;

    this.setState({ text: this.editorRef.current.value });
  }

  action = (key) => {
    const prevText = this.getText();
    let nextText;
    let positionOffset;

    switch (key) {
      case 10:
        nextText = addTag('B', prevText);
        positionOffset = 3;
        break;

      case 11:
        nextText = addTag('I', prevText);
        positionOffset = 3;
        break;

      case 12:
        nextText = addTag('S', prevText);
        positionOffset = 3;
        break;

      case 13:
        nextText = addTag('U', prevText);
        positionOffset = 3;
        break;

      case 14:
        nextText = addTag('SPOILER', prevText);
        positionOffset = 9;
        break;

      case 20:
        nextText = changeCase(1, prevText);
        break;

      case 21:
        nextText = changeCase(0, prevText);
        break;

      case 30:
        nextText = splitText('@', prevText);
        break;

      case 40:
        nextText = filename(prevText);
        break;

      default:
        console.log('[APP] command not found');
        break;
    }

    if (prevText !== nextText) {
      this.editorHistory.push(this.state.text);
      this.setText(nextText, positionOffset);
    }

    this.editorRef.current.focus();
  };

  discard = () => {
    const text = this.editorHistory[0];

    if (text !== undefined) {
      this.editorHistory = [];
      this.setState({ text });
    }

    this.editorRef.current.focus();
  };

  undo = () => {
    const previousText = this.editorHistory.pop();

    if (previousText !== undefined) {
      this.setState({ text: previousText });
    }

    this.editorRef.current.focus();
  };

  clipboard = () => {
    if (!navigator.clipboard) {
      return;
    }

    const text = this.getText();

    if (!text) {
      this.editorRef.current.focus();
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        this.setState({ message: '✓ Copied to clipboard' });

        return new Promise((resolve) => {
          setTimeout(() => resolve(), 2000);
        });
      })
      .then(() => {
        this.setState({ message: '' });
      });

    this.editorRef.current.focus();
  };

  onEditorChange = (event) => {
    this.setState({ text: event.target.value });
  };

  onTextSelect = (event) => {
    this.editorSelectionStart = event.target.selectionStart;
    this.editorSelectionEnd = event.target.selectionEnd;
  };

  switchMode = (val) => {
    this.editorRef.current.focus();

    if (typeof val !== 'boolean') {
      this.setState({ allText: !this.state.allText });
      return;
    }

    if (val === this.state.allText) {
      return;
    }

    this.setState({ allText: val });
  };

  hotkeys = (event) => {
    if (!event.altKey) {
      return;
    }

    switch (event.code) {
      case 'KeyB':
        this.action(10);
        break;

      case 'KeyI':
        this.action(11);
        break;

      case 'KeyS':
        this.action(12);
        break;

      case 'KeyU':
        this.action(13);
        break;

      case 'KeyP':
        this.action(14);
        break;

      case 'ArrowUp':
        this.action(20);
        break;

      case 'ArrowDown':
        this.action(21);
        break;

      case 'KeyJ':
        this.action(30);
        break;

      case 'KeyN':
        this.action(40);
        break;

      case 'KeyZ':
        this.undo();
        break;

      case 'KeyX':
        this.discard();
        break;

      case 'KeyQ':
        this.clipboard();
        break;

      case 'KeyK':
        this.switchMode(true);
        break;

      case 'KeyL':
        this.switchMode(false);
        break;

      default:
        return;
    }
  };

  render() {
    return (
      <main className='main'>
        <CommandBar
          action={this.action}
          showRollback={this.editorHistory.length > 0}
          discard={this.discard}
          undo={this.undo}
          allText={this.state.allText}
          switchMode={this.switchMode}
          clipboard={this.clipboard}
        />

        <Editor
          text={this.state.text}
          onChange={this.onEditorChange}
          onSelect={this.onTextSelect}
          editorRef={this.editorRef}
          selectionStart={this.editorSelectionStart}
          selectionEnd={this.editorSelectionEnd}
          message={this.state.message}
          onKeyDown={this.hotkeys}
        />

        <Preview text={this.state.text} />
      </main>
    );
  }
}

export default App;
