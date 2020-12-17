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

    if (selectionStart !== selectionEnd) {
      const currentText = ref.value;
      const selectedText = currentText.substring(selectionStart, selectionEnd);
      const insertText = `[${tagName}]${selectedText}[/${tagName}]`;

      ref.setRangeText(insertText, selectionStart, selectionEnd, 'end');
      ref.focus();

      this.editorHistory.push(currentText);
      this.setState({
        text: ref.value,
        selectionStart: 0,
        selectionEnd: 0,
      });
    }
  }

  changeCase(type) {
    const { selectionStart, selectionEnd } = this.state;
    const ref = this.editorRef.current;

    if (type && selectionStart !== selectionEnd) {
      const currentText = ref.value;
      const selectedText = currentText.substring(selectionStart, selectionEnd);

      let insertText;

      switch (type) {
        case 'upper':
          insertText = selectedText.toUpperCase();
          break;

        case 'lower':
          insertText = selectedText.toLowerCase();
          break;

        default:
          insertText = selectedText;
          break;
      }

      if (selectedText === insertText) {
        // no difference
        return;
      }

      ref.setRangeText(insertText, selectionStart, selectionEnd, 'end');
      ref.focus();

      this.editorHistory.push(currentText);
      this.setState({
        text: ref.value,
        selectionStart: 0,
        selectionEnd: 0,
      });
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
    this.changeCase('upper');
  };

  lower = () => {
    this.changeCase('lower');
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
