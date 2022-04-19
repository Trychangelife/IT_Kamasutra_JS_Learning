function removeSmallest(numbers) {
    //   throw "TODO: removeSmallest";
      let min = Math.min(...numbers)
      let index = numbers.indexOf(min);
      let count = 0;
      
      return numbers.filter((item) => {
        if (item === numbers[index] && count < 1) {
          item != numbers[index]
          count++
        }
        else {
          return item
        }
    
      })
    }