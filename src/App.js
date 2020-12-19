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

  wrapTextInTag(tag, text) {
    if (text.indexOf('\n') >= 0) {
      text = text.replaceAll(/ *\n */g, `[/${tag}]\n[${tag}]`);
    }

    return `[${tag}]${text}[/${tag}]`;
  }

  addTag(tag) {
    if (this.state.allText) {
      this.addTagToAllText(tag);
    } else if (this.state.selectionStart !== this.state.selectionEnd) {
      this.addTagToSelectedText(tag);
    } else {
      this.addTagToCurrentPosition(tag);
    }

    this.editorRef.current.focus();
  }

  addTagToAllText(tag) {
    const { text } = this.state;

    this.editorHistory.push(text);
    this.setState({ text: this.wrapTextInTag(tag, text) });
  }

  addTagToSelectedText(tag) {
    const selectedText = this.getSelectedTextFromEditor();

    if (selectedText) {
      const text = this.setTextToEditor(this.wrapTextInTag(tag, selectedText));
      this.setState({ text, selectionStart: 0, selectionEnd: 0 });
    }
  }

  addTagToCurrentPosition(tag) {
    const text = this.setTextToEditor(`[${tag}][/${tag}]`);
    this.setState({ text, selectionStart: 0, selectionEnd: 0 });
  }

  changeCase(upper) {
    if (this.state.allText) {
      upper ? this.uppercaseAllText() : this.lowercaseAllText();
    } else {
      upper ? this.uppercaseSelectedText() : this.lowercaseSelectedText();
    }

    this.editorRef.current.focus();
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

  splitText(separator) {
    if (this.state.allText) {
      this.splitAllText(separator);
    } else {
      this.splitSelectedText(separator);
    }
  }

  splitAllText(separator) {
    const { text } = this.state;

    if (text.indexOf('\n') >= 0) {
      this.editorHistory.push(text);
      this.setState({ text: text.replaceAll(/\n/g, `\n${separator}\n`) });
    }

    this.editorRef.current.focus();
  }

  splitSelectedText(separator) {
    const selectedText = this.getSelectedTextFromEditor();

    if (selectedText.indexOf('\n') >= 0) {
      const splittedText = selectedText.replaceAll(/\n/g, `\n${separator}\n`);
      const text = this.setTextToEditor(splittedText);
      this.setState({ text, selectionStart: 0, selectionEnd: 0 });
    }
  }

  switchMode = () => {
    this.setState({ allText: !this.state.allText });
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

  render() {
    return (
      <div className='app'>
        <div className='panel'>
          <div className='panel__main'>
            <button
              onClick={() => this.addTag('B')}
              title='bold'
              className='panel__btn'
            >
              B
            </button>
            <button
              onClick={() => this.addTag('I')}
              title='italic'
              className='panel__btn'
            >
              I
            </button>
            <button
              onClick={() => this.addTag('S')}
              title='strikethrough'
              className='panel__btn'
            >
              S
            </button>
            <button
              onClick={() => this.addTag('SPOILER')}
              title='spoiler'
              className='panel__btn'
            >
              &#9632;
            </button>
            <button
              onClick={() => this.changeCase(true)}
              title='uppercase'
              className='panel__btn'
            >
              AA
            </button>
            <button
              onClick={() => this.changeCase(false)}
              title='lowercase'
              className='panel__btn'
            >
              aa
            </button>
            <button
              onClick={() => this.splitText('@')}
              title='@ list'
              className='panel__btn'
            >
              @
            </button>
          </div>
          <div className='panel__aside'>
            <button
              onClick={this.undo}
              disabled={!this.editorHistory.length}
              className='panel__btn panel__btn--undo'
            >
              undo
            </button>
          </div>
        </div>

        <textarea
          id='editor'
          className='editor'
          value={this.state.text}
          onChange={this.onEditorChange}
          onSelect={this.onTextSelect}
          ref={this.editorRef}
        ></textarea>

        <div>
          <label className='panel__chkbox'>
            <input
              type='checkbox'
              name='mode'
              onChange={this.switchMode}
              checked={this.state.allText}
            />{' '}
            Apply to all text
          </label>
        </div>
      </div>
    );
  }
}

export default App;
