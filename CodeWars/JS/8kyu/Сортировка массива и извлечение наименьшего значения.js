class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function (a, b) {
      return a - b;
  });
      let firstEl = args.shift();
      return firstEl;
    }
  }