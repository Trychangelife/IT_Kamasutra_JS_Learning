function createPhoneNumber(n){
    var str = n.toString();
    return '\(' + str[0].concat(n[1]).concat(n[2]) + '\)' + " " + str[6].concat(n[4]).concat(n[5]) + '-' 
              + str[12].concat(n[7]).concat(n[8]).concat(n[9]);
}




// Как решили нормальные люди )

// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
    
//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
    
//     return format;
//   }