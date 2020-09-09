function fizzbuzz(a) {
  if (a % 3 == 0) {
    return "fizz";
  }

  if (a % 5 == 0) {
    return "buzz";
  }

  return a;
}
module.exports = fizzbuzz;
