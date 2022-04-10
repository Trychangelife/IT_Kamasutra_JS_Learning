function spinWords(sentence){
    //TODO Have fun :)
    const arr = sentence.split(' ');
    let result = '';
    arr.map((str, i) => {
      if (str.length >= 5) {
        arr[i] = str.split('').reverse().join('');
      }
      else {
        arr[i] = str;
      }
      result = arr.join(' ');
    })
    return result;
  }
  
  
  
  