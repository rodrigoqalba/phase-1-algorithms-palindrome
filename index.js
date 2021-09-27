function isPalindrome(word) {
  // Write your algorithm here
  

function isPalindrome(word){
  const arrayWord = word.split(``);
  const reverseArrayWord = arrayWord.reverse();
  const reverseWord = reverseArrayWord.join(``); 

  if(word === reverseWord) {
    console.log("true")
    return "true";
  }
  else { 
    console.log("false")
    return "false";
  }
}

}

const word = isPalindrome("abba")
console.log(word)



/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
