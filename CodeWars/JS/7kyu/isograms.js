function isIsogram(str){
    //...
    let unique = new Set(str.toLowerCase());
  //   console.log(unique.length);
    if (unique.size === str.length) {
      return true;
    }
    else { 
        return false;  
      }
  }