var min = function(list){
    var mini = list.sort((a, b) => a-b)
    return mini[0];
}

var max = function(list){
    var maxi = list.sort((a, b) => a-b)
    return maxi.pop();
}