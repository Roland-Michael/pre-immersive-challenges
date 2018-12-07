module.exports = function insertDashes(num) {
  // write your code in here

var stringNumber = num.toString(); //changing number 'num' to string
var evenNumbers = "02468"; //creating a string of even numbers to compare using .includes method

for(i=0;i<stringNumber.length;i++){
  if(evenNumbers.includes(stringNumber[i] && evenNumbers.includes(stringNumber[i+1])){stringNumber[i].push

  }else{

  }


  }


}





//var num = 15;
//var n = num.toString();

// for (var i = 0; i < str.length; i++) {
//   var isALetter = letters.includes(str[i]);
//   var noSymbolBeforeLetter = str[i - 1] !== '+';
//   var noSymbolAfterLetter = str[i + 1] !== '+';

//   if (isALetter && (noSymbolBeforeLetter || noSymbolAfterLetter)) {
//     return false;