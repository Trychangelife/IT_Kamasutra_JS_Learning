var number=function(array){
    let res = {}
    let count = 0;
    let arr = []
    if (array.length < 1) {
        return []
    }
    else {
        for (let i = 0, j = 1; i < array.length; i++) {
//     count++
//     res[i] = array[i -1 ]
            arr.push(`${j}: ${array[i]}`);
            j+= 1
        }
    }
    return arr
}