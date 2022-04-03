function getMiddle(s)
{
  //Code goes here!
  var length1 = s.length;
  var length3 = length1 / 2;
  var length2 = Math.ceil(length3);
  if (length1 % 2 === 0) {
  var lengthWord = s.length / 2;
  var result1 = s[lengthWord - 1] + s[lengthWord];
  return result1;
  }
  else if (length1 % 2 > 0) {
    var lengthWord = (s.length / 2) - 1;
    var ceilNum = Math.ceil(lengthWord);
    var result2 = s[ceilNum];
    return result2;
  }
}




