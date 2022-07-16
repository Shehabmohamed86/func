function isValidPassword(password,username){
  if (
    password.length < 8 ||
    password.indexOf(' ') !== -1 || 
    password.indexOf(username) !== -1
  ){
    return false ; 
  }

  return true ; 
}
 function avg (arr){
   let total = 0;
   for (let num of arr){
     total += num
   }
   return total / arr.length;
 }
function isPigram(sentence){
  let lowerCase = sentence.toLowerCase();
  for (let chra of 'abcdefghijklmnopqrstuvwxyz'){
    if (
      !lowerCase.includes(chra)
    ){
      return false ; 
    }
  }
  return true;
}