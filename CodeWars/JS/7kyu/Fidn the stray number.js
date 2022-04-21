function stray(numbers) {
    let arr = numbers.sort()
    let next = numbers.sort()
    console.log(arr)
    if (numbers[0] === arr[0] && arr[0] === arr[1]) {
      return arr.pop()
    }
    else {
      return arr[0]
    }
  
    }