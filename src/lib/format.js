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
    let el;

    arr.forEach((val, key) => {
      el = getPartsOfString(val);

      if (!el.empty) {
        arr[key] = `${el.space.start}[${tag}]${el.value}[/${tag}]${el.space.end}`;
      } else {
        arr[key] = el.value;
      }
    });

    return arr.join('\n');
  } else {
    text = getPartsOfString(text);

    return `${text.space.start}[${tag}]${text.value}[/${tag}]${text.space.end}`;
  }
}

// Change the case of text
export function changeCase(upper, text) {
  return upper ? text.toUpperCase() : text.toLowerCase();
}

// Add a separator to the list of lines in the text
export function splitText(separator, text) {
  return text.replaceAll(/\n/g, `\n${separator}\n`);
}

// Remove spaces at the beginning and at the end of lines in the text
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

// Get separately the value of the string and the spaces in it at the beginning and at the end
export function getPartsOfString(str) {
  const res = {
    value: '',
    space: { start: '', end: '' },
    empty: false,
  };

  if (!str) {
    res.empty = true;
    return res;
  }

  let i = 0;

  while (str[i] === ' ') {
    res.space.start += ' ';
    i++;
  }

  if (i >= str.length) {
    res.space.start = '';
    res.empty = true;
  }

  let k = str.length - 1;

  while (str[k] === ' ') {
    res.space.end += ' ';
    k--;
  }

  if (k < 0) {
    res.space.end = '';
    res.empty = true;
  }

  res.value = str.substring(i, k + 1);

  return res;
}
