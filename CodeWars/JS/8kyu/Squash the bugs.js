function findLongest(str) {
    let res = str.split(' ').sort((a, b) => a.length - b.length)
    return res.pop().length
  }