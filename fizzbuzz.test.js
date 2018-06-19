import fizzbuzz from './fizzbuzz';

// Example of bad naming - does not describe the spec
// to develop, does not describe to the user the actual rules
// maybe continue to refactor tests to give proper spec

test('does nothing with no argument', () => {
  expect(fizzbuzz()).toBeUndefined();
})

test('an argument of 1 gives [1]', () => {
  expect(fizzbuzz(1)).toEqual([1]) 
})

test("an argument of 2 gives [1, 2]", () => {
  expect(fizzbuzz(2)).toEqual([1, 2])
})

test(`an argument of 3 gives [1, 2, "Fizz"]`, () => {
  expect(fizzbuzz(3)).toEqual([1, 2, "Fizz"])
})

test(`an argument of 5 gives [1, 2, "Fizz", 4, "Buzz"]`, () => {
  expect(fizzbuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"])
})

test(`an argument of 6 gives [1, 2, "Fizz", 4, "Buzz", "Fizz"]`, () => {
  expect(fizzbuzz(6)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz"])
});

test(`an argument of 10 gives [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]`, () => {
  expect(fizzbuzz(10)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"])
});

test(`an argument of 15 gives [..., 11, "Fizz", 13, 14, "FizzBuzz"]`, function () {
  expect(fizzbuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"])
});
