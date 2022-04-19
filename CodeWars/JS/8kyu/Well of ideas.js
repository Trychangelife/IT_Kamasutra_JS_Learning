function well(x){
    let bad = x.filter((item) => item === 'bad').length
    let good = x.filter((item) => item === 'good').length
       if (good === 1 || good === 2) {
         return 'Publish!'
       }
        else if (good < 1) {
        return "Fail!"
      }
      else if (good > 1) {
        return "I smell a series!"
      }
    
    } 