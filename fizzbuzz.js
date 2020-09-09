function fizzbuzz(a) {
  let result = "";

  if (isFizz(a)) {
    result += "fizz";
  }
  if (isBuzz(a)) {
    result += "buzz";
  }

  return result === "" ? a : result;
}

function isFizz(a) {
  return a % 3 == 0;
}

function isBuzz(a) {
  return a % 5 == 0;
}

module.exports = fizzbuzz;
