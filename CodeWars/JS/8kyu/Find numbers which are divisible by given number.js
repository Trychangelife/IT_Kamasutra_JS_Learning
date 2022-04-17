function divisibleBy(numbers, divisor){
    let arr = [];
    let arr2 = [];
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] % divisor) === 0) {
            arr.push(numbers[i])
        }
        else {
            arr2.push(numbers[i]);
        }
    }
    return arr;
}