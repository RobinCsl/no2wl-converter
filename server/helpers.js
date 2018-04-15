/**
 * Helper functions to test some variables
 */

const isString = input => typeof input === "string";

const isSequenceOfDigits = input => /^(\d)*$/g.test(input);

const isGreaterThan1 = digit => digit > 1;

/**
 * Helper functions
 */

const flattenArray = arr => [].concat(...arr);

module.exports = {
  isString,
  isSequenceOfDigits,
  isGreaterThan1,
  flattenArray,
};
