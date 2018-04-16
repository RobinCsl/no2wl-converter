const {
  isString,
  isSequenceOfDigits,
  isGreaterThan1,
  flattenArray,
} = require("./helpers");

/**
 * Defining constants
 */

const keyboard = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

/**
 * Main function
 */

function number2wordlist(input) {
  if (arguments.length !== 1) {
    throw new Error("number2wordlist accepts only one argument");
  }
  if (!isString(input)) {
    throw new Error("number2wordlist accepts only a string");
  }
  if (!isSequenceOfDigits(input)) {
    throw new Error("number2wordlist: argument should be sequence of digits");
  }

  /**
   * If digit is 0 or 1, ignore for now.
   */
  const digits = input.split("").filter(digit => isGreaterThan1(digit));

  /**
   * To prevent performance issues, limit the number of digits to 10
   */

  if (digits.length > 10) {
    throw new Error(`Cannot accept more than 10 digits
     or call stack size will exceed`);
  }

  let result = [];
  digits.forEach((digit, index) => {
    if (index === 0) {
      /**
       * Add list of letter-words corresponding to first digit
       */
      result.push(keyboard[digit]);
    } else {
      result.forEach((word, i) => {
        /**
         * First, create new words by appending current word with new letters
         */
        const newWords = [];
        keyboard[digit].forEach((letter) => {
          newWords.push(`${word}${letter}`);
        });
        /**
         * Second, replace current word by list of new words
         */
        result[i] = newWords;
      });
    }
    /**
     * Flatten list of lists of words to be list of words, e.g. transform
     * "[['ad', 'ae', 'af'], ['bd', 'be', 'bf'], ['cd', 'ce', 'cf']]" into
     * "['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']"
     */
    result = flattenArray(result);
  });

  return result || [];
}

module.exports = { number2wordlist };
