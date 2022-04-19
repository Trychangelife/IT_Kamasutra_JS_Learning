function twoSort(s) {
    let word = s.sort()
    let sim = word[0].split('').map((item) => item[0] + '***')
    return sim.toString().replace(/,/g, '').slice(0, -3)
  }