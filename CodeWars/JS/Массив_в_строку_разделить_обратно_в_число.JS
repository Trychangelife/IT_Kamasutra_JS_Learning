function digitize(n) {
    //code here
    let x = n.toString().split('');
    let y = x.reverse();
    return (y.map(string => +string));
  }