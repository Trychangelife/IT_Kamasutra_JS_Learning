// Sum Numbers
function sum (numbers) {
  if (numbers == null || numbers.length < 1) {
    return 0;
  }
  else {
  return numbers.reduce((current, value) => value + current);
      }
}