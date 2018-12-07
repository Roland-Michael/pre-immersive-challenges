module.exports = function checkAscOrder(numArray) {
  // write your code in here

//   for(var i=0; i < numArray.length; i++){
//     if(numArray[i] < numArray[i+1]){
//       return true;
//     }else{
//       return false;
//     }
//   }
// }

var acceptable = true;
for(var i = 1; i < numArray.length; i++){
  if (numArray[i] > numArray[i-1]){
    acceptable = true;
  }else{
    return false;
  }
}
return acceptable;
}
