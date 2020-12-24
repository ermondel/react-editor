export function formatFilename(str) {
  return str.replaceAll(/[^-_().,a-zA-Z0-9 ]/g, '').replaceAll(/ {2,}/g, ' ');
}
