import React, { Component } from 'react';

class App extends Component {
  state = {
    text: 'Lorem ipsum dolor sit amet.',
    selectionStart: 0,
    selectionEnd: 0,
    allText: false,
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

  addTag(type, text) {
    if (text.indexOf('\n') >= 0) {
      text = text.replaceAll(/ *\n */g, `[/${type}]\n[${type}]`);
    }

    return `[${type}]${text}[/${type}]`;
  }

  addTagToSelectedText(type) {
    const selectedText = this.getSelectedTextFromEditor();

    if (selectedText) {
      const text = this.setTextToEditor(this.addTag(type, selectedText));
      this.setState({ text, selectionStart: 0, selectionEnd: 0 });
    }
  }

  addTagToCurrentPosition(type) {
    const text = this.setTextToEditor(`[${type}][/${type}]`);
    this.setState({ text, selectionStart: 0, selectionEnd: 0 });
  }

  uppercaseSelectedText() {
    const selectedText = this.getSelectedTextFromEditor();
    const result = selectedText.toUpperCase();

    if (result !== selectedText) {
      const text = this.setTextToEditor(result);
      this.setState({ text, selectionStart: 0, selectionEnd: 0 });
    }
  }

  lowercaseSelectedText() {
    const selectedText = this.getSelectedTextFromEditor();
    const result = selectedText.toLowerCase();

    if (result !== selectedText) {
      const text = this.setTextToEditor(result);
      this.setState({ text, selectionStart: 0, selectionEnd: 0 });
    }
  }

  atsignSelectedText() {
    const selectedText = this.getSelectedTextFromEditor();

    if (selectedText.indexOf('\n') >= 0) {
      const text = this.setTextToEditor(selectedText.replaceAll(/\n/g, '\n@\n'));
      this.setState({ text, selectionStart: 0, selectionEnd: 0 });
    }
  }

  addTagToAllText(type) {
    const { text } = this.state;

    this.editorHistory.push(text);
    this.setState({ text: this.addTag(type, text) });
  }

  uppercaseAllText() {
    const { text } = this.state;
    const result = text.toUpperCase();

    if (result !== text) {
      this.editorHistory.push(text);
      this.setState({ text: result });
    }
  }

  lowercaseAllText() {
    const { text } = this.state;
    const result = text.toLowerCase();

    if (result !== text) {
      this.editorHistory.push(text);
      this.setState({ text: result });
    }
  }

  atsignAllText() {
    const { text } = this.state;

    if (text.indexOf('\n') >= 0) {
      this.editorHistory.push(text);
      this.setState({ text: text.replaceAll(/\n/g, '\n@\n') });
    }
  }

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

  undo = () => {
    const previousText = this.editorHistory.pop();

    if (previousText) {
      this.setState({ text: previousText });
    }
  };

  bold = () => {
    if (this.state.allText) {
      this.addTagToAllText('B');
    } else if (this.state.selectionStart !== this.state.selectionEnd) {
      this.addTagToSelectedText('B');
    } else {
      this.addTagToCurrentPosition('B');
    }
  };

  italic = () => {
    if (this.state.allText) {
      this.addTagToAllText('I');
    } else if (this.state.selectionStart !== this.state.selectionEnd) {
      this.addTagToSelectedText('I');
    } else {
      this.addTagToCurrentPosition('I');
    }
  };

  strike = () => {
    if (this.state.allText) {
      this.addTagToAllText('S');
    } else if (this.state.selectionStart !== this.state.selectionEnd) {
      this.addTagToSelectedText('S');
    } else {
      this.addTagToCurrentPosition('S');
    }
  };

  spoiler = () => {
    if (this.state.allText) {
      this.addTagToAllText('SPOILER');
    } else if (this.state.selectionStart !== this.state.selectionEnd) {
      this.addTagToSelectedText('SPOILER');
    } else {
      this.addTagToCurrentPosition('SPOILER');
    }
  };

  upper = () => {
    if (this.state.allText) {
      this.uppercaseAllText();
    } else {
      this.uppercaseSelectedText();
    }
  };

  lower = () => {
    if (this.state.allText) {
      this.lowercaseAllText();
    } else {
      this.lowercaseSelectedText();
    }
  };

  atsign = () => {
    if (this.state.allText) {
      this.atsignAllText();
    } else {
      this.atsignSelectedText();
    }
  };

  render() {
    return (
      <div className='app'>
        <div className='panel'>
          <button onClick={this.bold}>B</button>
          <button onClick={this.italic}>I</button>
          <button onClick={this.strike}>S</button>
          <button onClick={this.spoiler}>&#9632;</button>
          <button onClick={this.upper}>AA</button>
          <button onClick={this.lower}>aa</button>
          <button onClick={this.atsign}>@</button>
          <label>
            <input
              type='checkbox'
              name='mode'
              onChange={this.switchMode}
              checked={this.state.allText}
            />
            Apply to all text
          </label>
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
