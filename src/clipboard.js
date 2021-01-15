function writeToClipboard(text, callback) {
  if (navigator.clipboard) {
    async function write() {
      try {
        await navigator.clipboard.writeText(text);

        callback(true);
      } catch (error) {
        callback(false);
      }
    }

    write();
  } else if (document.execCommand) {
    function listener(event) {
      event.preventDefault();
      event.clipboardData.setData('text/plain', text);
    }

    document.addEventListener('copy', listener);
    const res = document.execCommand('copy');
    document.removeEventListener('copy', listener);

    callback(res ? true : false);
  } else {
    callback(false);
  }
}

export default writeToClipboard;
