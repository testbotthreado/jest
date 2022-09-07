const sum = require('./sum');

test('Addition of 1 + 2 is equal to 3', () => {
  expect(sum(1, 2)).toBe(3);
});

