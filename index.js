function isPalindrome(word) {
  let len = word.length
  let result = true 
  for (let pair = 0; pair < Math.floor(len/2); pair++) {
    if(word[pair] === word[(len-pair-1)]) {} else {return !!!result}
  }
  return !!result
  // Write your algorithm here
}

/*
  Compare first and last letter in string
  Then compare second and second to last letter in string
  Repeat (length of string / 2) times, rounded down
  If always a match, true, else false  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
