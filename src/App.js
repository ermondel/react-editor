import React, { Component } from 'react';
import CommandBar from './components/CommandBar';
import StatusBar from './components/StatusBar';
import EditorWindow from './components/EditorWindow';
import Preview from './components/Preview';
import { addTag, changeCase, splitText, filename, trimText } from './lib/format';
import { hotkeys } from './config/keys';
import extendTextarea from './lib/textarea';
import writeToClipboard from './lib/clipboard';

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

  __discard() {
    const text = this.editorHistory[0];

    if (text !== undefined) {
      this.editorHistory = [];
      this.setState({ text });
    }
  }

  __undo() {
    const previousText = this.editorHistory.pop();

    if (previousText !== undefined) {
      this.setState({ text: previousText });
    }
  }

  __clipboard() {
    if (!this.state.text.length) {
      return;
    }

    this.source.setCursor(this.state.text.length);

    writeToClipboard(this.state.text, (success) => {
      this.setState({
        message: success ? '✓ Copied to clipboard' : '[Browser buffer error]',
      });

      setTimeout(() => this.setState({ message: '' }), 2000);
    });
  }

  __switchMode(val) {
    if (typeof val !== 'boolean') {
      this.setState({ allText: !this.state.allText });
      return;
    }

    if (val === this.state.allText) {
      return;
    }

    this.setState({ allText: val });
  }

  __setEditorAsUsed() {
    if (this.state.text.length > 0 && !this.editorHistory.length) {
      this.editorHistory.push('');
      this.setState({ clean: false });
    }
  }

  __hotkey(event) {
    const altKey = event.altKey;
    const otherKey = event.code !== 'AltLeft' && event.code !== 'AltRight';

    if (!altKey || !otherKey) {
      return;
    }

    const hotkey = hotkeys[event.code];

    if (!hotkey) {
      console.log('[APP] hotkey not found');
      return;
    }

    if (!hotkey.disabled) {
      this.action(hotkey.code);
    }
  }

  __autogrowing(event) {
    if (event.target.scrollHeight > event.target.clientHeight) {
      event.target.style.height = event.target.scrollHeight + 5 + 'px';
    }
  }

  __toHistoryOnEnter(event) {
    if (event.code === 'Enter') {
      this.editorHistory.push(this.state.text);
    }
  }

  __saveTextFromClipboard(event) {
    event.preventDefault();
    this.editorHistory.push(this.state.text);
    const paste = (event.clipboardData || window.clipboardData).getData('text');
    this.setState({ text: this.source.setText(paste) });
  }

  __setCounterOfSelectedCharacters(event) {
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;

    const csc = start !== end ? end - start : 0;
    this.editorCSCRef.current.textContent = csc;
  }

  // Commands
  action = (code, event) => {
    if (event && event.currentTarget) {
      event.currentTarget.blur();
    }

    this.source.focus();

    switch (code) {
      case 901:
        return this.__undo();

      case 902:
        return this.__discard();

      case 903:
        return this.__clipboard();

      case 904:
        return this.__switchMode();

      default:
        break;
    }

    const text = this.__getText();

    switch (code) {
      case 101:
        return this.__setText(addTag('B', text), text, 3);

      case 102:
        return this.__setText(addTag('I', text), text, 3);

      case 103:
        return this.__setText(addTag('S', text), text, 3);

      case 104:
        return this.__setText(addTag('U', text), text, 3);

      case 105:
        return this.__setText(addTag('SPOILER', text), text, 9);

      case 201:
        return this.__setText(changeCase(1, text), text);

      case 202:
        return this.__setText(changeCase(0, text), text);

      case 301:
        return this.__setText(splitText('@', text), text);

      case 401:
        return this.__setText(filename(text), text);

      case 501:
        return this.__setText(trimText(text), text);

      default:
        console.log('[APP] command not found');
        break;
    }
  };

  // Events
  onEditorChange = (event) => this.setState({ text: event.target.value });
  onEditorTextSelect = (event) => this.__setCounterOfSelectedCharacters(event);
  onEditorPaste = (event) => this.__saveTextFromClipboard(event);
  onEditorCut = () => this.editorHistory.push(this.state.text);
  onEditorKeyDown = (event) => this.__toHistoryOnEnter(event);
  onEditorKeyUp = (event) => this.__autogrowing(event);
  onDocumentKeyDown = (event) => this.__hotkey(event);

  // Lifecycle
  componentDidUpdate() {
    this.__setEditorAsUsed();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onDocumentKeyDown);
  }

  // Render
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
