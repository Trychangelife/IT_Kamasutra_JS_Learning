String.prototype.toJadenCase = function () {
    //...
    let word = this.split(' ')
    let arr = []
    for (let i = 0; i < word.length; i++) {
      arr.push(word[i].charAt(0).toUpperCase() + word[i].slice(1))
    }
    return arr.join(' ')
  };