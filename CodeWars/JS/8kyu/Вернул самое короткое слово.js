function findShort(s){
    var str = s.split(' ');
    var arr = str.sort((x, y) => x.length - y.length);
      return arr[0].length;
  
}
