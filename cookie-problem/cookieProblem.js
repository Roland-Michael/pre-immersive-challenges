module.exports = function cookieProblem(array) {
  // write your code in here
  var highNumber = Math.max(...array);
  // console.log(highNumber);
  var totalCookies = 0;
  // console.log(typeof totalCookies);
  for(i=0; i < array.length; i++){
    totalCookies += (highNumber - array[i]);
    // console.log("totalcookies", totalCookies);
    }
    return totalCookies;
  }



