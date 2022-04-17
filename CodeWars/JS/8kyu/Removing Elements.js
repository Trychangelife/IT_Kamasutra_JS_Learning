function removeEveryOther(arr){
    //your code here
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {

        if ((i % 2) === 0) {
            arr2.push(arr[i]);
        }

        else {
            arr2.push('^');
        }
    }
    return arr2.filter((item) => item != '^');
}