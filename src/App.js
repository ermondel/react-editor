import React, { Component } from 'react';
import CommandBar from './components/CommandBar';
import StatusBar from './components/StatusBar';
import EditorWindow from './components/EditorWindow';
import Preview from './components/Preview';
import { addTag, changeCase, splitText, filename } from './editor';

class App extends Component {
  state = {
    text: '',
    allText: false,
    message: '',
  };

  editorHistory = [];
  editorRef = React.createRef();
  editorCSCRef = React.createRef();

  __getText() {
    if (this.state.allText) {
      return this.state.text;
    }

    const start = this.editorRef.current.selectionStart;
    const end = this.editorRef.current.selectionEnd;

    if (start === end) {
      return '';
    }

    return this.editorRef.current.value.substring(start, end);
  }

  __setText(text, positionOffset) {
    if (this.state.allText) {
      this.setState({ text });

      return;
    }

    const start = this.editorRef.current.selectionStart;
    const end = this.editorRef.current.selectionEnd;

    this.editorRef.current.setRangeText(text, start, end, 'end');

    if (positionOffset && start === end) {
      this.editorRef.current.selectionStart = start + positionOffset;
      this.editorRef.current.selectionEnd = start + positionOffset;
    }

    this.setState({ text: this.editorRef.current.value });
  }

  __processText(nextText, prevText, positionOffset) {
    if (nextText !== prevText) {
      this.editorHistory.push(this.state.text);

      this.__setText(nextText, positionOffset);
    }

    this.editorRef.current.focus();
  }

  __discard = () => {
    const text = this.editorHistory[0];

    if (text !== undefined) {
      this.editorHistory = [];
      this.setState({ text });
    }

    this.editorRef.current.focus();
  };

  __undo = () => {
    const previousText = this.editorHistory.pop();

    if (previousText !== undefined) {
      this.setState({ text: previousText });
    }

    this.editorRef.current.focus();
  };

  __clipboard = () => {
    if (!navigator.clipboard || !this.state.text.length) {
      return this.editorRef.current.focus();
    }

    this.editorRef.current.selectionStart = this.state.text.length;
    this.editorRef.current.selectionEnd = this.state.text.length;

    navigator.clipboard
      .writeText(this.state.text)
      .then(() => {
        this.setState({ message: '✓ Copied to clipboard' });

        return new Promise((resolve) => {
          setTimeout(() => resolve(), 2000);
        });
      })
      .then(() => {
        this.setState({ message: '' });
      })
      .catch(() => {
        this.setState({ message: 'Browser buffer error. Repeat the action!' });

        return new Promise((resolve) => {
          setTimeout(() => resolve(), 2000);
        });
      })
      .then(() => {
        this.setState({ message: '' });
      });

    // important sequence - focus > blur
    this.editorRef.current.focus();
    this.editorRef.current.blur();
  };

  __switchMode = (val) => {
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

  action = (code, val) => {
    switch (code) {
      case 50:
        return this.__undo();

      case 51:
        return this.__discard();

      case 70:
        return this.__clipboard();

      case 80:
        return this.__switchMode(val);

      default:
        break;
    }

    const text = this.__getText();

    switch (code) {
      case 10:
        return this.__processText(addTag('B', text), text, 3);

      case 11:
        return this.__processText(addTag('I', text), text, 3);

      case 12:
        return this.__processText(addTag('S', text), text, 3);

      case 13:
        return this.__processText(addTag('U', text), text, 3);

      case 14:
        return this.__processText(addTag('SPOILER', text), text, 9);

      case 20:
        return this.__processText(changeCase(1, text), text);

      case 21:
        return this.__processText(changeCase(0, text), text);

      case 30:
        return this.__processText(splitText('@', text), text);

      case 40:
        return this.__processText(filename(text), text);

      default:
        console.log('[APP] command not found');
        break;
    }
  };

  onEditorChange = (event) => {
    this.setState({ text: event.target.value });
  };

  onEditorTextSelect = (event) => {
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;

    const csc = start !== end ? end - start : 0;
    this.editorCSCRef.current.textContent = csc;
  };

  onEditorKeyDown = (event) => {
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
        this.action(50);
        break;

      case 'KeyX':
        this.action(51);
        break;

      case 'KeyQ':
        this.action(70);
        break;

      case 'KeyK':
        this.action(80, true);
        break;

      case 'KeyL':
        this.action(80, false);
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
          allText={this.state.allText}
          historyLength={this.editorHistory.length}
        />

        <div className='editor'>
          <StatusBar
            text={this.state.text}
            message={this.state.message}
            editorCSCRef={this.editorCSCRef}
          />

          <EditorWindow
            editorRef={this.editorRef}
            text={this.state.text}
            onEditorChange={this.onEditorChange}
            onEditorKeyDown={this.onEditorKeyDown}
            onEditorTextSelect={this.onEditorTextSelect}
          />
        </div>

        <Preview text={this.state.text} />
      </main>
    );
  }
}

export default App;
