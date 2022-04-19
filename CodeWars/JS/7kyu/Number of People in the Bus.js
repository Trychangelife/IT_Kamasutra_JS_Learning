var number = function(busStops){
    // Good Luck!
    let start = 0;
    for (let i = 0; i < busStops.length; i++) {
      start+= busStops[i][0] - busStops[i][1]
    }
    return start;
  }