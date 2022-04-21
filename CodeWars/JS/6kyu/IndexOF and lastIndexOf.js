function duplicateEncode(word){
    // ...
  return word
  .toLowerCase()
  .split('')
  .map((v, i, arr) => {return arr.indexOf(v) == arr.lastIndexOf(v) ? '(' : ')'})
  .join('')
}