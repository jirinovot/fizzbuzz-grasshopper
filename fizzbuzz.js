function fizzbuzz(a) {
  if (isFizz(a) && isBuzz(a)) {
    return "fizzbuzz";
  }
  if (isFizz(a)) {
    return "fizz";
  }
  if (isBuzz(a)) {
    return "buzz";
  }

  return a;
}

function isFizz(a) {
  return a % 3 == 0;
}

function isBuzz(a) {
  return a % 5 == 0;
}

module.exports = fizzbuzz;
