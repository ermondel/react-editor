// Convert BBCode to HTML
export function bbcodeToHTML(text) {
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

// Get the length of the text without spaces
export function lengthWithoutSpaces(text) {
  if (text) {
    const spaces = text.match(/\s/g);
    return spaces ? text.length - spaces.length : text.length;
  }

  return 0;
}

// Format the text as a filename
export function filename(text) {
  return text.replaceAll(/[^-_().,a-zA-Z0-9 ]/g, '').replaceAll(/ {2,}/g, ' ');
}

//
export function addTag(tag, text) {
  if (text.indexOf('\n') >= 0) {
    text = text.replaceAll(/ *\n */g, `[/${tag}]\n[${tag}]`);
  }

  return `[${tag}]${text}[/${tag}]`;
}

//
export function changeCase(upper, text) {
  return upper ? text.toUpperCase() : text.toLowerCase();
}

//
export function splitText(separator, text) {
  return text.replaceAll(/\n/g, `\n${separator}\n`);
}
