function isPalindrome(word) {
  // Write your algorithm here
  describe("isPalindrome", () => {
    it("returns true for 'abba'", () => {
      expect(isPalindrome("abba")).to.be.true;
    });
    it("returns true for 'racecar'", () => {
      expect(isPalindrome("racecar")).to.be.true;
    });
    it("returns true for 'a'", () => {
      expect(isPalindrome("a")).to.be.true;
    });
    it("returns false for 'robot'", () => {
      expect(isPalindrome("robot")).to.be.false;
    });
    it("returns false for 'ab'", () => {
      expect(isPalindrome("ab")).to.be.false;
    });
  });
}

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
