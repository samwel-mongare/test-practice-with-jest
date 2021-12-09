const capitalizeFirst = require('./capitalize');

test('Check if capitalizeFirst function is present', () => {
    expect(capitalizeFirst).toBeDefined();
});

test('The first letter should be capitalized', () => {
    expect(capitalizeFirst('hello')).toEqual('Hello');
});