function hero(bullets, dragons){
    //Get Coding!
      var killOneDragon = bullets * 0.5;
      var bulletsDevideDragon = killOneDragon / dragons;
      if (bulletsDevideDragon >= 1 || dragons === 0) {
        return true;
      }
      else {
        return false;
      }
    }
    

    // Адекватное решение с CW 
    // function hero(bullets, dragons){
    //     //Get Coding!
    //     return (bullets / 2 >= dragons) ? true : false;
    //     }