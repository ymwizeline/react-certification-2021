function random(limit) {
  return Math.floor(Math.random() * limit);
}

function formatTitleWithApostrophe(title) {
  return title.replaceAll('&#39;', "'");
}

function filterByResultType(data, type) {
  return data.filter(({ id: { kind } }) => kind === `youtube#${type}`);
}

export { random, formatTitleWithApostrophe, filterByResultType };
