function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Cannot divide by zero');
  }
  return numerator / denominator;
}

export default divideFunction;
