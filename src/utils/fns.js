function random(limit) {
  return Math.floor(Math.random() * limit);
}

function formatTitleWithApostrophe(title) {
  let result = title;
  while (result.includes('&#39;')) {
    result = result.replace('&#39;', "'");
  }
  return result;
}

function filterByResultType(data, type) {
  return data.filter(({ id: { kind } }) => kind === `youtube#${type}`);
}

export { random, formatTitleWithApostrophe, filterByResultType };
