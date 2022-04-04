function XO(str) {
    str = str.toLowerCase().split('');
    let x = str.filter( x => { return x == 'x'})
    let o = str.filter( x => { return x == 'o'})
    
    return x.length == o.length
    }