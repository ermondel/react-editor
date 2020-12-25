import React, { Component } from 'react';
import Panel from './components/Panel';
import Editor from './components/Editor';
import Underside from './components/Underside';
import Preview from './components/Preview';
import { formatFilename } from './editor';

class App extends Component {
  state = {
    text: '',
    selectionStart: 0,
    selectionEnd: 0,
    allText: false,
  };

  editorRef = React.createRef();
  editorHistory = [];

  constructor(props) {
    super(props);

    this.addTag = this.addTag.bind(this);
    this.changeCase = this.changeCase.bind(this);
    this.splitText = this.splitText.bind(this);
    this.undo = this.undo.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
    this.onTextSelect = this.onTextSelect.bind(this);
    this.switchMode = this.switchMode.bind(this);
    this.formatAsFilename = this.formatAsFilename.bind(this);
    this.discardChanges = this.discardChanges.bind(this);
    this.addToClipboard = this.addToClipboard.bind(this);
  }

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

  formatAsFilename() {
    if (this.state.allText) {
      this.formatAsFilenameAllText();
    } else {
      this.formatAsFilenameSelectedText();
    }
  }

  formatAsFilenameAllText() {
    const { text } = this.state;

    if (text) {
      const formattedText = formatFilename(text);

      if (formattedText !== text) {
        this.editorHistory.push(text);
        this.setState({ text: formattedText });
      }
    }

    this.editorRef.current.focus();
  }

  formatAsFilenameSelectedText() {
    const selectedText = this.getSelectedTextFromEditor();

    if (selectedText) {
      const formattedText = formatFilename(selectedText);

      if (formattedText !== selectedText) {
        const text = this.setTextToEditor(formattedText);
        this.setState({ text, selectionStart: 0, selectionEnd: 0 });
      }
    }

    this.editorRef.current.focus();
  }

  discardChanges() {
    const text = this.editorHistory[0];

    if (text) {
      this.editorHistory = [];
      this.setState({ text });
    }

    this.editorRef.current.focus();
  }

  addToClipboard() {
    const { text } = this.state;

    if (text && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }

    this.editorRef.current.focus();
  }

  switchMode() {
    this.setState({ allText: !this.state.allText });
  }

  undo() {
    const previousText = this.editorHistory.pop();

    if (previousText) {
      this.setState({ text: previousText });
    }

    this.editorRef.current.focus();
  }

  onEditorChange(event) {
    this.setState({ text: event.target.value });
  }

  onTextSelect(event) {
    this.setState({
      selectionStart: event.target.selectionStart,
      selectionEnd: event.target.selectionEnd,
    });
  }

  render() {
    return (
      <div className='app'>
        <Panel
          addTag={this.addTag}
          changeCase={this.changeCase}
          splitText={this.splitText}
          formatAsFilename={this.formatAsFilename}
          undo={this.undo}
          historyLength={this.editorHistory.length}
          discardChanges={this.discardChanges}
          addToClipboard={this.addToClipboard}
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
