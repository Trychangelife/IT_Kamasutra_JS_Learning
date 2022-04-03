function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    var arr = dna.split('');
    var result = arr.map(eachElement => {
      if (eachElement === 'T') {
        return 'U';
      }
      else {
        return eachElement;
      }
    })
    return result.join('');
  }


//   Нормальное решение через регулярное выражение 
//   function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     return dna.replace(/T/g, 'U');
//   }