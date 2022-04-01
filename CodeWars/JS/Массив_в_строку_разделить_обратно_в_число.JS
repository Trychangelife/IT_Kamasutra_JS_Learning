function digitize(n) {
    //code here
    let x = n.toString().split('');
    let y = x.reverse();
    return (y.map(string => +string));
  }



  /* Лучшее решение в CW

  function digitize(n) {
    return String(n).split('').reverse().map(Number)
  }