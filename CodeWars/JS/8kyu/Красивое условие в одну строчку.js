const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return ((fuelLeft - (distanceToPump / mpg)) >= 0 ) ? true : false;
  };