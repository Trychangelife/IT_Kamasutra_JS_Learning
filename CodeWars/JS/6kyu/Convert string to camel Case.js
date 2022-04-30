function toCamelCase(str) {
    let word = str.split('_')
    let word1 = str.split('-')
    let arr = []
    if (word.length > 1) {
        arr.push(word[0])
        for (let i = 1; i < word.length; i++) {
            arr.push(word[i].charAt(0).toUpperCase() + word[i].slice(1))
        }
    }
    else if (word1.length > 1) {
        arr.push(word1[0])
        for (let i = 1; i < word1.length; i++) {
            arr.push(word1[i].charAt(0).toUpperCase() + word1[i].slice(1))
        }
    }
    return arr.join('')
}