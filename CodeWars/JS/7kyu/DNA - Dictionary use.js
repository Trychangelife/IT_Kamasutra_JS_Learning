function DNAStrand(dna){
    //your code here
    var dictionary = {A: 'T', T: 'A', C: 'G', G: 'C'};
    return dna
          .split('')
          .map((x) => dictionary[x])
          .join('');
  }