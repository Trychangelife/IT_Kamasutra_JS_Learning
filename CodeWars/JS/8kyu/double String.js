function doubleChar(str) {
    // Your code here
    var doubleStr = str.split('').map((s) => s + s);
    return (doubleStr.join(''));
  }
  