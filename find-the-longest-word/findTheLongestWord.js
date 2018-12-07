module.exports = function findTheLongestWord(sen) {
  // write your code in here
  var longestWord = sen[0];
  for(var i =1; i < sen.length; i++){
    if(sen[i].length > longestWord.length){
      longestWord = sen[i];
    }else{
      longestWord = longestWord;
    }
  }
  return longestWord;
}
