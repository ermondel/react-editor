function getText() {
  if (this.ref.current) {
    const start = this.ref.current.selectionStart;
    const end = this.ref.current.selectionEnd;

    if (start === end) {
      return '';
    }

    return this.ref.current.value.substring(start, end);
  }

  console.log('[APP] [textarea] no ref');
}

function setText(text, positionOffset) {
  if (this.ref.current) {
    const start = this.ref.current.selectionStart;
    const end = this.ref.current.selectionEnd;

    this.ref.current.setRangeText(text, start, end, 'end');

    if (positionOffset && start === end) {
      this.ref.current.selectionStart = start + positionOffset;
      this.ref.current.selectionEnd = start + positionOffset;
    }

    return this.ref.current.value;
  }

  console.log('[APP] [textarea] no ref');
}

function setCursor(position) {
  if (this.ref.current) {
    this.ref.current.selectionStart = position;
    this.ref.current.selectionEnd = position;

    return;
  }

  console.log('[APP] [textarea] no ref');
}

function focus() {
  if (this.ref.current) {
    this.ref.current.focus();

    return;
  }

  console.log('[APP] [textarea] no ref');
}

function extendTextarea(ref) {
  return {
    ref,
    getText,
    setText,
    setCursor,
    focus,
  };
}

export default extendTextarea;
