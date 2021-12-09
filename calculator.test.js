const Calculator = require('./calculator');

const mathy = new Calculator(2,3);

describe('Addition function works if', () => {
    test('it is a defined funtion', () => {
        expect(mathy.addition).toBeDefined();
    });

    test('sum of 2 and 3 is equal to 5', () => {
        expect(mathy.addition).toEqual(5);
    });

    test('sum of 2 and 3 is equal to a defined number', () => {
        expect(mathy.addition).toBeDefined();
    });
});

describe('Multiply function works if', () => {
    test('it is a defined funtion', () => {
        expect(mathy.multiply).toBeDefined();
    });

    test('multiplication of 2 and 3 is equal to 6', () => {
        expect(mathy.multiply).toEqual(6);
    });

    test('multiplication of 2 and 3 is equal to a defined number', () => {
        expect(mathy.multiply).toBeDefined();
    });
});

describe('Subtract function works if', () => {
    test('it is a defined funtion', () => {
        expect(mathy.subtract).toBeDefined();
    });

    test('subtraction result of 2 and 3 is equal to -1', () => {
        expect(mathy.subtract).toEqual(-1);
    });

    test('Subtraction result of 2 and 3 is equal to a defined number', () => {
        expect(mathy.subtract).toBeDefined();
    });
});

describe('Division function works if', () => {
    test('it is a defined funtion', () => {
        expect(mathy.divide).toBeDefined();
    });

    test('Solution to 2 divide by 3 is equal to 0.6666667', () => {
        expect(mathy.divide).toEqual(0.6666666666666666);
    });

    test('Solution to 2 divide by 3 is a defined number', () => {
        expect(mathy.divide).toBeDefined();
    });
});