import fizzbuzz from './fizzbuzz';

test('does nothing with no argument', () => {
  expect(fizzbuzz()).toBeUndefined();
})

test('an argument of 1 gives [1]', () => {
  expect(fizzbuzz(1)).toEqual([1]) 
})

test("an argument of 2 gives [1, 2]", function () {
  expect(fizzbuzz(2)).toEqual([1, 2])
})

test(`an argument of 3 gives [1, 2, "Fizz"]`, function () {
  expect(fizzbuzz(3)).toEqual([1, 2, "Fizz"])
})

test(`an argument of 5 gives [1, 2, "Fizz", 4, "Buzz"]`, function () {
  expect(fizzbuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"])
})

test(`an argument of 6 gives [1, 2, "Fizz", 4, "Buzz", "Fizz"]`, function () {
  expect(fizzbuzz(6)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz"]);
});