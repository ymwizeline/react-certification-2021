function random(limit) {
  return Math.floor(Math.random() * limit);
}

function formatTitleWithApostrophe(title) {
  let result = title;
  while (title.includes('&#39;')) {
    result = result.replace('&#39;', "'");
  }
  return result;
}

function getEmbeddedLink(url) {
  let result = url;
  result = result.replace('watch?v=', 'embed/');
  return result;
}

function filterByResultType(data, type) {
  return data.filter(({ kind }) => kind === `youtube#${type}`);
}

export { random, formatTitleWithApostrophe, getEmbeddedLink, filterByResultType };
