function abbrevName(name){
    let arr = name.trim().split(" ");
    let firstCapital = arr[0].split('')
    let secondCapital = firstCapital[0].toUpperCase();
    let threeCapital = arr[1].split('')
    let fourCapital = threeCapital[0].toUpperCase();
    return (secondCapital + '.' + fourCapital);
  
  }