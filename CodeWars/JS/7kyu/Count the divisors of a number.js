function getDivisorsCnt(n){
    // todo
  let count = 0;
  let idk = 0;
  for (let i = 1; i <= n; i++) {
    if ((n % i) === 0) {
      count++
    }
    else {
      idk++
    }
  }
  return count;
}