function dobbleArr(arr){
  const result = [];
  for(let num of arr){
    let dobble = num * 2;
    result.push(dobble)
  }
  return result;
}