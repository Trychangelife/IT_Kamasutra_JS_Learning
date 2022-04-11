function solution(str, ending){
    // TODO: complete
    if (ending === '') {
      return true;
    }
    let str2 = str.split('').slice(-ending.length).join('');
    if (str2 === ending) {
      return true;
    }
    else {
      return false;
    }
  //   return str2;
  }