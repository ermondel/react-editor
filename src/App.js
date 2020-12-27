import React, { Component } from 'react';
import Panel from './components/Panel';
import Editor from './components/Editor';
import Underside from './components/Underside';
import Preview from './components/Preview';
import * as lib from './editor';

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
      case 1:
        nextText = lib.addTag('B', prevText);
        break;

      case 2:
        nextText = lib.addTag('I', prevText);
        break;

      case 3:
        nextText = lib.addTag('S', prevText);
        break;

      case 4:
        nextText = lib.addTag('SPOILER', prevText);
        break;

      case 5:
        nextText = lib.changeCase(1, prevText);
        break;

      case 6:
        nextText = lib.changeCase(0, prevText);
        break;

      case 7:
        nextText = lib.splitText('@', prevText);
        break;

      case 8:
        if (navigator && navigator.clipboard) {
          navigator.clipboard.writeText(prevText);
        }
        nextText = prevText;
        break;

      case 9:
        nextText = lib.filename(prevText);
        break;

      case 10:
        // nextText = lib.filename(prevText);
        break;

      default:
        console.log('[APP] command not found');
        break;
    }

    if (prevText !== nextText) {
      this.editorHistory.push(prevText);
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
      <div className='app'>
        <Panel
          action={this.action}
          showRollback={this.editorHistory.length > 0}
          discard={this.discard}
          undo={this.undo}
        />

        <Editor
          text={this.state.text}
          onChange={this.onEditorChange}
          onSelect={this.onTextSelect}
          editorRef={this.editorRef}
          selectionStart={this.state.selectionStart}
          selectionEnd={this.state.selectionEnd}
        />

        <Underside switchMode={this.switchMode} allText={this.state.allText} />

        <Preview text={this.state.text} />
      </div>
    );
  }
}

export default App;
