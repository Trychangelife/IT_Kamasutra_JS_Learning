// write the function isAnagram
var isAnagram = function(test, original) {
    let a = test.toLowerCase().split('').sort().join('')
    let b = original.toLowerCase().split('').sort().join('')
    console.log(b)
    if (a === b) {
        return true
    }
    else {
        return false
    }
};
