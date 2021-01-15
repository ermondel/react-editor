export const hotkeys = {
  KeyB: { code: 10, disabled: false },
  KeyI: { code: 11, disabled: false },
  KeyS: { code: 12, disabled: false },
  KeyU: { code: 13, disabled: false },
  KeyP: { code: 14, disabled: false },
  ArrowUp: { code: 20, disabled: false },
  ArrowDown: { code: 21, disabled: false },
  KeyJ: { code: 30, disabled: false },
  KeyN: { code: 40, disabled: false },
  KeyZ: { code: 50, disabled: false },
  KeyX: { code: 51, disabled: false },
  KeyQ: { code: 70, disabled: navigator.userAgent.indexOf('Chrome') < 0 },
  KeyK: { code: 80, disabled: false },
  KeyT: { code: 90, disabled: false },
};

export const keys = {
  key10: {
    title: { en: 'Bold' },
    shortcut: '[Alt+B]',
    code: 10,
  },
  key11: {
    title: { en: 'Italic' },
    shortcut: '[Alt+I]',
    code: 11,
  },
  key12: {
    title: { en: 'Strikethrough' },
    shortcut: '[Alt+S]',
    code: 12,
  },
  key13: {
    title: { en: 'Underline' },
    shortcut: '[Alt+U]',
    code: 13,
  },
  key14: {
    title: { en: 'Spoiler' },
    shortcut: '[Alt+P]',
    code: 14,
  },
  key20: {
    title: { en: 'Uppercase' },
    shortcut: '[Alt+↑]',
    code: 20,
  },
  key21: {
    title: { en: 'Lowercase' },
    shortcut: '[Alt+↓]',
    code: 21,
  },
  key30: {
    title: { en: 'Convert lines to @-list' },
    shortcut: '[Alt+J]',
    code: 30,
  },
  key40: {
    title: { en: 'Format as filename' },
    shortcut: '[Alt+N]',
    code: 40,
  },
  key50: {
    title: { en: 'Undo' },
    shortcut: '[Alt+Z]',
    code: 50,
  },
  key51: {
    title: { en: 'Undo all' },
    shortcut: '[Alt+X]',
    code: 51,
  },
  key70: {
    title: { en: 'Add to clipboard' },
    shortcut: navigator.userAgent.indexOf('Chrome') >= 0 ? '[Alt+Q]' : '',
    code: 70,
  },
  key80: {
    title: {
      en: `Mode switch.\n\nApplying formatting: all text or selected text.\n\n`,
    },
    shortcut: '[Alt+K]',
    code: 80,
  },
  key90: {
    title: {
      en: `Remove spaces at the beginning\nand at the end of lines.\n`,
    },
    shortcut: '[Alt+T]',
    code: 90,
  },
};
