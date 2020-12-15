import React, { Component } from 'react';

class App extends Component {
  state = {
    text: 'Lorem ipsum dolor sit amet.',
    selectionStart: 0,
    selectionEnd: 0,
  };

  editorRef = React.createRef();

  onEditorChange = (event) => {
    this.setState({ text: event.target.value });
  };

  onTextSelect = (event) => {
    const { selectionStart, selectionEnd } = event.target;

    if (selectionStart !== selectionEnd) {
      this.setState({ selectionStart, selectionEnd });
    }
  };

  addTag = (tagName) => {
    const { selectionStart, selectionEnd } = this.state;

    if (tagName && selectionStart !== selectionEnd) {
      const text = this.editorRef.current.value;
      const selected = text.substring(selectionStart, selectionEnd);
      const val = `[${tagName}]${selected}[/${tagName}]`;

      this.editorRef.current.setRangeText(val, selectionStart, selectionEnd, 'end');
      this.editorRef.current.focus();

      this.setState({ text: this.editorRef.current.value });
    }
  };

  render() {
    return (
      <div className='app'>
        <div className='panel'>
          <button onClick={() => this.addTag('B')}>B</button>
          <button onClick={() => this.addTag('I')}>I</button>
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
