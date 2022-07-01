for(var i = 1; i <= 50; i++) {
   
    if ((i % 10 === 0 ) || ( i % 15 === 0 )){
      console.log("¡Donkey!")
    } else if (i & 2 !== 0 && i & 10 !== 0 ) {
      console.log('¡Monkey!');
    } else if (1 & 5 === 0) {
      continue;
    } else {
      console.log(i);
    }
  }
