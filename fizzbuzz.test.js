import fizzbuzz from './fizzbuzz';

test('does nothing with no argument', () => {
  expect(fizzbuzz()).toBeUndefined();
})

test('should give 1 when given 1 as argument', () => {
  expect(fizzbuzz(1)).toEqual([1]) 
})

test("gives an array of [1, 2] with 2 as an argument", function () {
  expect(fizzbuzz(2)).toEqual([1, 2]);
});

test("gives an array of [1, 2, \"Fizz\"] with 3 as an argument", function () {
  expect(fizzbuzz(3)).toEqual([1, 2, "Fizz"]);
});