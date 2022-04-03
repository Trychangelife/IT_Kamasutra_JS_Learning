function lovefunc(flower1, flower2){
    // moment of truth
    var total = (flower1 + flower2) % 2;
    if (total > 0) {
      return true;
    }
    else {
      return false;
    }
  }