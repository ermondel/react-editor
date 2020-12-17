import React, { Component } from 'react';

class App extends Component {
  state = {
    text: 'Lorem ipsum dolor sit amet.',
    selectionStart: 0,
    selectionEnd: 0,
  };

  editorRef = React.createRef();
  editorHistory = [];

  getSelectedTextFromEditor() {
    if (this.state.selectionStart === this.state.selectionEnd) {
      return '';
    }

    return this.editorRef.current.value.substring(
      this.state.selectionStart,
      this.state.selectionEnd
    );
  }

  setTextToEditor(text) {
    const editor = this.editorRef.current;

    this.editorHistory.push(editor.value);

    editor.setRangeText(
      text,
      this.state.selectionStart,
      this.state.selectionEnd,
      'end'
    );

    editor.focus();

    return editor.value;
  }

  addTag(type) {
    const selectedText = this.getSelectedTextFromEditor();

    if (selectedText) {
      const text = this.setTextToEditor(`[${type}]${selectedText}[/${type}]`);
      this.setState({ text, selectionStart: 0, selectionEnd: 0 });
    }
  }

  onEditorChange = (event) => {
    this.setState({ text: event.target.value });
  };

  onTextSelect = (event) => {
    const { selectionStart, selectionEnd } = event.target;

    if (selectionStart !== selectionEnd) {
      this.setState({ selectionStart, selectionEnd });
    }
  };

  undo = () => {
    const previousText = this.editorHistory.pop();

    if (previousText) {
      this.setState({ text: previousText });
    }
  };

  bold = () => {
    this.addTag('B');
  };

  italic = () => {
    this.addTag('I');
  };

  strike = () => {
    this.addTag('S');
  };

  split = () => {
    const { text } = this.state;

    if (text.indexOf('@') >= 0) {
      this.editorHistory.push(text);
      this.setState({ text: text.replaceAll(/ *@ */g, '\r\n@\r\n') });
    }
  };

  upperAll = () => {
    const { text } = this.state;

    this.editorHistory.push(text);
    this.setState({ text: text.toUpperCase() });
  };

  lowerAll = () => {
    const { text } = this.state;

    this.editorHistory.push(text);
    this.setState({ text: text.toLowerCase() });
  };

  upper = () => {
    const selectedText = this.getSelectedTextFromEditor();
    const result = selectedText.toUpperCase();

    if (result !== selectedText) {
      const text = this.setTextToEditor(result);
      this.setState({ text, selectionStart: 0, selectionEnd: 0 });
    }
  };

  lower = () => {
    const selectedText = this.getSelectedTextFromEditor();
    const result = selectedText.toLowerCase();

    if (result !== selectedText) {
      const text = this.setTextToEditor(result);
      this.setState({ text, selectionStart: 0, selectionEnd: 0 });
    }
  };

  render() {
    return (
      <div className='app'>
        <div className='panel'>
          <button onClick={this.bold}>B</button>
          <button onClick={this.italic}>I</button>
          <button onClick={this.strike}>S</button>
          <button onClick={this.split}>-@-</button>
          <button onClick={this.upperAll}>-AA-</button>
          <button onClick={this.lowerAll}>-aa-</button>
          <button onClick={this.upper}>AA</button>
          <button onClick={this.lower}>aa</button>
          <button onClick={this.undo} disabled={!this.editorHistory.length}>
            undo
          </button>
        </div>

        <textarea
          id='editor'
          className='editor'
          value={this.state.text}
          onChange={this.onEditorChange}
          onSelect={this.onTextSelect}
          ref={this.editorRef}
        ></textarea>
      </div>
    );
  }
}

export default App;
