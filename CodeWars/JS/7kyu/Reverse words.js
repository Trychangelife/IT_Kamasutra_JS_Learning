function reverseWords(str) {
    // Go for it
    let word = str.split(' ');
    let arr = [];
    for (let i = 0; i < word.length; i++) {
     arr.push(word[i].split('').reverse('').toString('').replace(/,/g, ''))
    }
    return arr.toString().replace(/,/g, ' ')
  }