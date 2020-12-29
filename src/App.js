import React, { Component } from 'react';
import CommandBar from './components/CommandBar';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { addTag, changeCase, splitText, filename } from './editor';

class App extends Component {
  state = {
    text: '',
    selectionStart: 0,
    selectionEnd: 0,
    allText: false,
  };

  editorRef = React.createRef();
  editorHistory = [];

  getText() {
    if (this.state.allText) {
      return this.state.text;
    }

    if (this.state.selectionStart === this.state.selectionEnd) {
      return '';
    }

    return this.editorRef.current.value.substring(
      this.state.selectionStart,
      this.state.selectionEnd
    );
  }

  setText(text) {
    if (this.state.allText) {
      this.setState({ text });

      return;
    }

    this.editorRef.current.setRangeText(
      text,
      this.state.selectionStart,
      this.state.selectionEnd,
      'end'
    );

    this.setState({
      text: this.editorRef.current.value,
      selectionStart: 0,
      selectionEnd: 0,
    });
  }

  action = (key) => {
    let prevText = this.getText();
    let nextText;

    switch (key) {
      case 10:
        nextText = addTag('B', prevText);
        break;

      case 11:
        nextText = addTag('I', prevText);
        break;

      case 12:
        nextText = addTag('S', prevText);
        break;

      case 13:
        nextText = addTag('U', prevText);
        break;

      case 14:
        nextText = addTag('SPOILER', prevText);
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

      case 50:
        if (navigator && navigator.clipboard) {
          navigator.clipboard.writeText(prevText);
        }
        nextText = prevText;
        break;

      default:
        console.log('[APP] command not found');
        break;
    }

    if (prevText !== nextText) {
      this.editorHistory.push(this.state.text);
      this.setText(nextText);
    }

    this.editorRef.current.focus();
  };

  discard = () => {
    const text = this.editorHistory[0];

    if (text) {
      this.editorHistory = [];
      this.setState({ text });
    }

    this.editorRef.current.focus();
  };

  undo = () => {
    const previousText = this.editorHistory.pop();

    if (previousText) {
      this.setState({ text: previousText });
    }

    this.editorRef.current.focus();
  };

  onEditorChange = (event) => {
    this.setState({ text: event.target.value });
  };

  onTextSelect = (event) => {
    this.setState({
      selectionStart: event.target.selectionStart,
      selectionEnd: event.target.selectionEnd,
    });
  };

  switchMode = () => {
    this.setState({ allText: !this.state.allText });
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
        />

        <Editor
          text={this.state.text}
          onChange={this.onEditorChange}
          onSelect={this.onTextSelect}
          editorRef={this.editorRef}
          selectionStart={this.state.selectionStart}
          selectionEnd={this.state.selectionEnd}
        />

        <Preview text={this.state.text} />
      </main>
    );
  }
}

export default App;
