import React, { Component } from 'react';

class App extends Component {
  state = {
    text: 'Lorem ipsum dolor sit amet.',
    selectionStart: 0,
    selectionEnd: 0,
  };

  editorRef = React.createRef();
  editorHistory = [];

  addTag(tagName) {
    const { selectionStart, selectionEnd } = this.state;
    const ref = this.editorRef.current;

    if (tagName && selectionStart !== selectionEnd) {
      const currentText = ref.value;

      this.editorHistory.push(currentText);

      const selectedText = currentText.substring(selectionStart, selectionEnd);
      const insertText = `[${tagName}]${selectedText}[/${tagName}]`;

      ref.setRangeText(insertText, selectionStart, selectionEnd, 'end');
      ref.focus();

      this.setState({ text: ref.value });
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

  split = () => {
    const { text } = this.state;

    if (text.indexOf('@') >= 0) {
      this.editorHistory.push(text);
      this.setState({ text: text.replaceAll(/ *@ */g, '\r\n@\r\n') });
    }
  };

  render() {
    return (
      <div className='app'>
        <div className='panel'>
          <button onClick={this.bold}>B</button>
          <button onClick={this.italic}>I</button>
          <button onClick={this.split}>@</button>
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
