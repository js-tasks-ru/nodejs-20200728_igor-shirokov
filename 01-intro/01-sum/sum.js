function sum(a, b) {
  /* ваш код */
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Arguments must be a number')
  }
  return a + b;
}

module.exports = sum;
