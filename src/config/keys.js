export const hotkeys = {
  KeyB: { code: 101, disabled: false },
  KeyI: { code: 102, disabled: false },
  KeyS: { code: 103, disabled: false },
  KeyU: { code: 104, disabled: false },
  KeyP: { code: 105, disabled: false },
  ArrowUp: { code: 201, disabled: false },
  ArrowDown: { code: 202, disabled: false },
  KeyJ: { code: 301, disabled: false },
  KeyN: { code: 401, disabled: false },
  KeyZ: { code: 901, disabled: false },
  KeyX: { code: 902, disabled: false },
  KeyQ: { code: 903, disabled: navigator.userAgent.indexOf('Chrome') < 0 },
  KeyK: { code: 904, disabled: false },
  KeyT: { code: 501, disabled: false },
};

export const keys = {
  key101: {
    title: { en: 'Bold' },
    shortcut: '[Alt+B]',
    code: 101,
  },
  key102: {
    title: { en: 'Italic' },
    shortcut: '[Alt+I]',
    code: 102,
  },
  key103: {
    title: { en: 'Strikethrough' },
    shortcut: '[Alt+S]',
    code: 103,
  },
  key104: {
    title: { en: 'Underline' },
    shortcut: '[Alt+U]',
    code: 104,
  },
  key105: {
    title: { en: 'Spoiler' },
    shortcut: '[Alt+P]',
    code: 105,
  },
  key201: {
    title: { en: 'Uppercase' },
    shortcut: '[Alt+↑]',
    code: 201,
  },
  key202: {
    title: { en: 'Lowercase' },
    shortcut: '[Alt+↓]',
    code: 202,
  },
  key301: {
    title: { en: 'Convert lines to @-list' },
    shortcut: '[Alt+J]',
    code: 301,
  },
  key401: {
    title: { en: 'Format as filename' },
    shortcut: '[Alt+N]',
    code: 401,
  },
  key901: {
    title: { en: 'Undo' },
    shortcut: '[Alt+Z]',
    code: 901,
  },
  key902: {
    title: { en: 'Undo all' },
    shortcut: '[Alt+X]',
    code: 902,
  },
  key903: {
    title: { en: 'Add to clipboard' },
    shortcut: navigator.userAgent.indexOf('Chrome') >= 0 ? '[Alt+Q]' : '',
    code: 903,
  },
  key904: {
    title: {
      en: `Mode switch.\n\nApplying formatting: all text or selected text.\n\n`,
    },
    shortcut: '[Alt+K]',
    code: 904,
  },
  key501: {
    title: {
      en: `Remove spaces at the beginning\nand at the end of lines.\n`,
    },
    shortcut: '[Alt+T]',
    code: 501,
  },
};
