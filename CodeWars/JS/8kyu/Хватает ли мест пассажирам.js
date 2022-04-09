function enough(cap, on, wait) {
    // your code here
    if ((on + wait) - cap > 0) {
      return (on + wait) - cap;
    }
    else {
      return 0;
    }
  }