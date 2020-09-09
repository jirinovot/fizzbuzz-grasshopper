/**
 *
 * @param {number} inputNumber positive integer
 */
function fizzbuzz(inputNumber) {
  let result = "";

  if (isFizz(inputNumber)) {
    result += "fizz";
  }
  if (isBuzz(inputNumber)) {
    result += "buzz";
  }

  return result === "" ? inputNumber : result;
}

function isFizz(inputNumber) {
  return inputNumber % 3 == 0;
}

function isBuzz(inputNumber) {
  return inputNumber % 5 == 0;
}

module.exports = fizzbuzz;
