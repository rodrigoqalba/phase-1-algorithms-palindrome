// Write your algorithm here
// function isPalindrome(word){
//   const reversed = word.split('').reverse().join('')
//   return reversed == word
// }

function isPalindrome(word){
for (let i = 0; i < word.length / 2; i++) {
  const j = word.length - 1 - i;
  if (word[i] !== word[j]) return false;
  }

return true;
}

// function isPalindrome(word){
//   let start = 0;
//   let finish = word.length - 1;

//   while (start < finish) {
//     if (word[start++] !== word[finish--]) {
//        return false
//     }
//   }
//   return true
// }


// function isPalindrome(word){
//   const arrayWord = word.split(``);
//   const reverseArrayWord = arrayWord.reverse()
//   const reverseWord = reverseArrayWord.join(``); 

//   if(word === reverseWord) {
//     console.log("true");

//   }
//   else { 
//     console.log("false");

//   }
// }

// const word = promt ("abba");
// isPalindrome(word)



// /* 
//   Add your pseudocode here
// */

// /*
//   Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
if (require.main === module) {
//   // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
