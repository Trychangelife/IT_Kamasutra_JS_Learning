function openOrSenior(data){
    // ...
    var newData = [];
    var i;
    
    for(i = 0; i < data.length; i++) {
      if(data[i][0] >= 55 && data[i][1] > 7) {
        newData.push("Senior");
      }
      else {
        newData.push('Open');
      }
    }
    return newData;
  }