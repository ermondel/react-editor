// Convert BBCode to HTML
export function bbcode2html(str) {
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

  for (let i = 0; i < str.length; i++) {
    char = str[i];

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

// Wrap a string in the bbcode tag
export function bbcodetag(tag, str) {
  if (str.indexOf('\n') >= 0) {
    let arr = str.split('\n');
    let el;

    arr.forEach((val, key) => {
      el = strinf(val);

      if (!el.empty) {
        arr[key] = `${el.space.start}[${tag}]${el.value}[/${tag}]${el.space.end}`;
      } else {
        arr[key] = el.value;
      }
    });

    return arr.join('\n');
  } else {
    str = strinf(str);

    return `${str.space.start}[${tag}]${str.value}[/${tag}]${str.space.end}`;
  }
}

// Get the length of the string without spaces
export function strnetlen(str) {
  if (str) {
    const spaces = str.match(/\s/g);
    return spaces ? str.length - spaces.length : str.length;
  }

  return 0;
}

// Format the string as filename
export function str2filename(str) {
  return str.replaceAll(/[^-_().,a-zA-Z0-9 ]/g, '').replaceAll(/ {2,}/g, ' ');
}

// Change the case of the string
export function strcase(upper, text) {
  return upper ? text.toUpperCase() : text.toLowerCase();
}

// Split lines in the string with the separator
export function srtssplit(separator, str) {
  return str.replaceAll(/\n/g, `\n${separator}\n`);
}

// Strip whitespace from the beginning and end of the strings
export function strstrim(str) {
  if (str.indexOf('\n') >= 0) {
    let arr = str.split('\n');

    arr.forEach((val, key) => {
      arr[key] = val.trim();
    });

    return arr.join('\n');
  }

  return str.trim();
}

/**
 * Get info about the string
 * :obj
 *  value - value without leading and trailing spaces
 *  space.start - all leading spaces
 *  space.end - all trailing spaces
 *  empty - is the string empty (a string consisting of spaces is considered empty)
 */
export function strinf(str) {
  const res = {
    value: '',
    space: {
      start: '',
      end: '',
    },
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
