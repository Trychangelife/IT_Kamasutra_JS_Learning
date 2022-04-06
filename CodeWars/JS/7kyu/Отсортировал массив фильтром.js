function friend(friends){
    //your code here  
      let arr = Array.from(friends);
      let someArr = [];
      return arr.filter((letter) => letter.length === 4);
  //     console.log(arr[0].length);
  }