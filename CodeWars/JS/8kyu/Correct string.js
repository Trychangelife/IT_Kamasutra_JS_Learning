function correct(string)
{
  // your code here
  let str = string.split('');
  var str2 = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      str2.push('O')
    }
    else if (str[i] === '1') {
      str2.push('I')
    }
    else if (str[i] === '5') {
      str2.push('S')
    }
    else {
     str2.push(str[i]);
    }
  }
  return str2.toString('').replace(/\,/g, '');
  }