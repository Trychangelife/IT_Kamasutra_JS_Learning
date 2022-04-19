function minMax(arr){
    let arr2 = []
    let min = arr.sort((a, b) => a - b)[0]
    let max = arr.sort((a, b) => b - a)[0]
    arr2.push([max])
    arr2.push([min])
  //   console.log(min)
    return arr2.flat().sort((a , b) => a - b);
  }