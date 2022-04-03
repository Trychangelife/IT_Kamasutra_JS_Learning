function fakeBin(x){
    var arr = x.split('');
    var result = arr.map(eachElement => {
      if (eachElement < 5) {
        return 0;
      }
      else {
        return 1;
      }
    })
    return result.join('');
  }