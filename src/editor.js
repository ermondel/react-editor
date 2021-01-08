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
    '[U]': '<span class="bbcode-underline">',
    '[/U]': '</span>',
  };

  let code = false;
  let tag = '';
  let res = '';
  let char = '';

  for (let i = 0; i < text.length; i++) {
    char = text[i];

    if (char === '[') {
      code = true;
    }

    if (code) {
      tag += char.toUpperCase();
    } else {
      switch (char) {
        case '\n':
          res += '<br />';
          break;

        case ' ':
          res += '&nbsp';
          break;

        default:
          res += char;
          break;
      }
    }

    if (char === ']') {
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

// Wrap text in a tag
export function addTag(tag, text) {
  if (text.indexOf('\n') >= 0) {
    let arr = text.split('\n');

    arr.forEach((val, key) => {
      arr[key] = val.trim().length ? `[${tag}]${val}[/${tag}]` : val;
    });

    return arr.join('\n');
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

//
export function trimText(text) {
  if (text.indexOf('\n') >= 0) {
    let arr = text.split('\n');

    arr.forEach((val, key) => {
      arr[key] = val.trim();
    });

    return arr.join('\n');
  }

  return text.trim();
}
