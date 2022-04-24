function factorial(n)
{
    let arr = [];
    if (n === 0 || n === 1 || n === []) {
        return 1
    }
    else if (n > 12) {
        throw RangeError
    }
    else {
        for (let i = 0; i <= n; i++) {
            arr.push(i)
        }
    }
    arr.shift()
//   console.log(arr)
    return arr.reduce((a, b) => a * b);
}