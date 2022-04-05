function SeriesSum(n)
{   if (!n) {
  return '0.00';
}
    let sum = 1;
    let y = 4;
  
  for (let i = 1; i < n; i++) {
    sum += 1 / y;
    y += 3;
  }
  return sum.toFixed(2);
}