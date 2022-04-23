function findDifference(a, b) {
    //loading...
    let sum1 = a.reduce((item, item2) => item * item2);
    let sum2 = b.reduce((item, item2) => item * item2);
    return sum1 > sum2 ? (sum1 - sum2) : (sum2 - sum1);
}