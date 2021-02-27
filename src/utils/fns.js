function random(limit) {
  return Math.floor(Math.random() * limit);
}

function formatTitleWithApostrophe(title) {
  let result = title;
  while (title.indexOf('&#39;') >= 0) {
    result = result.replace('&#39;', "'");
  }
  return result;
}

export { random, formatTitleWithApostrophe };
