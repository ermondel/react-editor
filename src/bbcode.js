const markup = {
  '[B]': '<span class="bbcode-bold">',
  '[/B]': '</span>',
  '[I]': '<span class="bbcode-italic">',
  '[/I]': '</span>',
  '[S]': '<span class="bbcode-strike">',
  '[/S]': '</span>',
  '[SPOILER]': '<span class="bbcode-spoiler">',
  '[/SPOILER]': '</span>',
};

export function bbcodeToHTML(text) {
  let code = false;
  let tag = '';
  let res = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '[') {
      code = true;
    }

    if (code) {
      tag += text[i].toUpperCase();
    } else if (text[i] === '\n') {
      res += '<br />';
    } else {
      res += text[i];
    }

    if (text[i] === ']') {
      code = false;

      if (markup[tag]) {
        res += markup[tag];
      }

      tag = '';
    }
  }

  return res;
}
