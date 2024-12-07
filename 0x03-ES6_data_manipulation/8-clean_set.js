function cleanSet(set, startString) {
  const result = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
  return result;
}

export default cleanSet;
