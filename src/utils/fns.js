function random(limit) {
  return Math.floor(Math.random() * limit);
}

function formatTitleWithApostrophe(title) {
  return title.split('&#39;').join("'");
}

function filterByResultType(data, type) {
  return data.filter(({ id: { kind } }) => kind === `youtube#${type}`);
}

export { random, formatTitleWithApostrophe, filterByResultType };
