import React, { Component } from 'react';
import CommandBar from './components/CommandBar';
import StatusBar from './components/StatusBar';
import EditorWindow from './components/EditorWindow';
import Preview from './components/Preview';
import { addTag, changeCase, splitText, filename, trimText } from './editor';
import { hotkeys } from './config/keys';
import extendTextarea from './textarea';

class App extends Component {
  state = {
    text: '',
    allText: false,
    message: '',
    clean: true,
  };

  source = extendTextarea(React.createRef());
  editorHistory = [];
  editorCSCRef = React.createRef();

  __getText() {
    return this.state.allText ? this.state.text : this.source.getText();
  }

  __setText(nextText, prevText, positionOffset) {
    if (nextText === prevText) {
      return;
    }

    this.editorHistory.push(this.state.text);

    if (!this.state.allText) {
      nextText = this.source.setText(nextText, positionOffset);
    }

    this.setState({ text: nextText });
  }

  __discard = () => {
    const text = this.editorHistory[0];

    if (text !== undefined) {
      this.editorHistory = [];
      this.setState({ text });
    }
  };

  __undo = () => {
    const previousText = this.editorHistory.pop();

    if (previousText !== undefined) {
      this.setState({ text: previousText });
    }
  };

  __clipboard = () => {
    if (!navigator.clipboard || !this.state.text.length) {
      return;
    }

    this.source.setCursor(this.state.text.length);

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
  };

  __switchMode = (val) => {
    if (typeof val !== 'boolean') {
      this.setState({ allText: !this.state.allText });
      return;
    }

    if (val === this.state.allText) {
      return;
    }

    this.setState({ allText: val });
  };

  action = (code, event) => {
    if (event && event.currentTarget) {
      event.currentTarget.blur();
    }

    this.source.focus();

    switch (code) {
      case 50:
        return this.__undo();

      case 51:
        return this.__discard();

      case 70:
        return this.__clipboard();

      case 80:
        return this.__switchMode();

      default:
        break;
    }

    const text = this.__getText();

    switch (code) {
      case 10:
        return this.__setText(addTag('B', text), text, 3);

      case 11:
        return this.__setText(addTag('I', text), text, 3);

      case 12:
        return this.__setText(addTag('S', text), text, 3);

      case 13:
        return this.__setText(addTag('U', text), text, 3);

      case 14:
        return this.__setText(addTag('SPOILER', text), text, 9);

      case 20:
        return this.__setText(changeCase(1, text), text);

      case 21:
        return this.__setText(changeCase(0, text), text);

      case 30:
        return this.__setText(splitText('@', text), text);

      case 40:
        return this.__setText(filename(text), text);

      case 90:
        return this.__setText(trimText(text), text);

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

  onEditorPaste = (event) => {
    event.preventDefault();
    this.editorHistory.push(this.state.text);
    const paste = (event.clipboardData || window.clipboardData).getData('text');
    this.setState({ text: this.source.setText(paste) });
  };

  onEditorCut = () => {
    this.editorHistory.push(this.state.text);
  };

  onEditorKeyDown = (event) => {
    if (event.code === 'Enter') {
      this.editorHistory.push(this.state.text);
    }
  };

  onEditorKeyUp = (event) => {
    if (event.target.scrollHeight > event.target.clientHeight) {
      event.target.style.height = event.target.scrollHeight + 'px';
    }
  };

  onDocumentKeyDown = (event) => {
    if (event.altKey && event.code !== 'AltLeft' && event.code !== 'AltRight') {
      if (hotkeys[event.code]) {
        this.action(hotkeys[event.code]);
      } else {
        console.log('[APP] hotkey not found');
      }
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onDocumentKeyDown);
  }

  componentDidUpdate() {
    if (this.state.text.length > 0 && !this.editorHistory.length) {
      this.editorHistory.push('');
      this.setState({ clean: false });
    }
  }

  render() {
    return (
      <main className='main'>
        <CommandBar
          action={this.action}
          text={this.state.text}
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
            text={this.state.text}
            editorRef={this.source.ref}
            onEditorCut={this.onEditorCut}
            onEditorPaste={this.onEditorPaste}
            onEditorKeyUp={this.onEditorKeyUp}
            onEditorChange={this.onEditorChange}
            onEditorTextSelect={this.onEditorTextSelect}
            onEditorKeyDown={this.onEditorKeyDown}
          />
        </div>

        <Preview text={this.state.text} />
      </main>
    );
  }
}

export default App;
