function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let sqrt = Math.sqrt(sq)
    let next = Math.pow((sqrt + 1), 2);
    return Number.isInteger(next) ? next : -1;
  }