var myFunctions = require('./sum')
test('largestoftwonumbers', () => {
    expect(myFunctions.largestoftwonumbers(6, 7)).toBe(7)
});
test('largestofthreenumbers', () => {
    expect(myFunctions.largestofthreenumbers(4, 6, 8)).toBe(8)
});
test('add', () => {
    expect(myFunctions.sum(5, 6)).toBe(11);
});


test('subtract', () => {
    expect(myFunctions.subtract(7, 4)).toBe(3)
});
test('check', () => {
    const ar = [4, 5, 6, 7];
    const a = 3;
    expect(myFunctions.check(a, ar)).toBeTruthy()
});

test('multiply', () => {
    expect(myFunctions.multiply(3, 4)).toBe(12)
});
test('division', () => {
    expect(myFunctions.division(10, 2)).toBe(5)
});


test('factorial', () => {
    expect(myFunctions.factorial(1)).toBe(1)
});
test('evenorodd', () => {
    expect(myFunctions.evenorodd(5)).toBeFalsy()
});