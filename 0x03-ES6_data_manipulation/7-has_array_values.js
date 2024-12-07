function hasValuesFromArray(set, arr) {
  return arr.every((value) => set.has(value));
}

export default hasValuesFromArray;
