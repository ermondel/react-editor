export function formatFilename(str) {
  return str.replaceAll(/[^-_().,a-zA-Z0-9 ]/g, '').replaceAll(/ {2,}/g, ' ');
}

export function lengthWithoutSpaces(text) {
  if (text) {
    const spaces = text.match(/\s/g);
    return spaces ? text.length - spaces.length : text.length;
  }

  return 0;
}
