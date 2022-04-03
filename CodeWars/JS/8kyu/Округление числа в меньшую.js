function litres(time) {
    let water = ((time*60) * 0.5) / 60;
    return Math.floor(water);
  }