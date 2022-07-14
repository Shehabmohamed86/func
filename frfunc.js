function rollDie () {
  let roll = Math.floor(Math.random() * 6 ) +1 ;
  console.log(`rolled : ${roll}`);
}

function throwNum (rollNum) {
  for (let i = 0 ; i < rollNum ; i++){
   rollDie();
  }
}