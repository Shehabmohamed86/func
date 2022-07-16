function pick (arre){
  const idx = Math.floor(Math.random() * arre.length)
  return arre[idx];
}
function getCard () {
  const values = ['1','2','3','4','a','b','c'];
  const suits = ['clups','spades','heart'];
   return {value: pick(values), suits: pick(suits)}
}
