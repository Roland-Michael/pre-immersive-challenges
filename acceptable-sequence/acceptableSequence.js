module.exports = function acceptableSequence(str) {
  // write your code here
  
	var letters = 'abcdefghijklmnopqrstuvwxyz';

	for (var i = 0; i < str.length; i++) {
		var isALetter = letters.includes(str[i]);
		var noSymbolBeforeLetter = str[i - 1] !== '+';
		var noSymbolAfterLetter = str[i + 1] !== '+';

		if (isALetter && (noSymbolBeforeLetter || noSymbolAfterLetter)) {
			return false;
		}
	}
	return true;
}

// 	for (var i = 0; i < str.length; i++) {
// 		// if the character in str is not null
// 		if (str[i].match(/[a-z]/i) !== null) {
// 			// check if symbols are surrounding the letter
// 			if (str.charAt(i + 1) === '+' && str.charAt(i - 1) === '+') {
// 				return true;
// 			} else {
// 				return false;
// 			}
// 		}
// 	}
// }