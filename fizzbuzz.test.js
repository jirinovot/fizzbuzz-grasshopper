const fizzbuzz = require("./fizzbuzz");

test("fizzbuzz of 1 is 1", () => {
  expect(fizzbuzz(1)).toBe(1);
});

test("fizzbuzz of 3 is fizz", () => {
  expect(fizzbuzz(3)).toBe("fizz");
});

test("fizzbuzz of 5 is buzz", () => {
  expect(fizzbuzz(5)).toBe("buzz");
});

test("fizzbuzz of 15 is fizzbuzz", () => {
  expect(fizzbuzz(15)).toBe("fizzbuzz");
});
