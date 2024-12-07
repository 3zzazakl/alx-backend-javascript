function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  }
  return numerator / denominator;
}

export default divideFunction;
