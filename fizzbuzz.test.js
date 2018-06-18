import fizzbuzz from './fizzbuzz';

test('does nothing with no argument', () => {
  expect(fizzbuzz()).toBeUndefined();
})

test('should give 1 when given 1 as argument', () => {
  expect(fizzbuzz(1)).toEqual([1]) 
})
