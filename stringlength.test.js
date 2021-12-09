const stringLength = require('./stringlength.js');

test('Check if stringLength function is present', () => {
  expect(stringLength).toBeDefined();
});

test('Check the length of the string input', () => {
  expect(stringLength('hello')).toEqual(5);
});

test('The word is too long', () => {
  expect(() => {
    stringLength('hellohelloo');
  }).toThrow('The word is too long');
});

test('The word is too short', () => {
  expect(() => {
    stringLength('');
  }).toThrow('The word is too short');
});