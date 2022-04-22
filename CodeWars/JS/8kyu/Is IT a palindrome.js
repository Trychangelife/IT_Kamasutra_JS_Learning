function isPalindrome(x) {
    // your code here
    let pal = x.toLowerCase().split('').reverse().toString();
    let y = x.toLowerCase().split('').toString()
    if (y === pal) {
      return true
    }
    else {
      return false
    }
  }