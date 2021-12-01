function largestoftwonumbers(a, b) {
    if (a > b)
        return a;
    else
        return b;
}

function largestofthreenumbers(a, b, c) {
    const largest = Math.max(a, b, c);
    return largest;
}

function factorial(a) {
    let fact = 1;
    for (i = 1; i <= a; i++) {
        fact *= i;
    }
    return fact;

}

function evenorodd(a) {
    if (a != 0) {
        if (a % 2 == 0)
            return true;
        else
            return false;
    }
}

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}



function check(e, a) {

    var c = a.length;
    for (var i = 0; i < c; i++) {
        if (a[i] == e)
            return true;
    }
    return false;
}
module.exports = {
    sum,
    subtract,
    multiply,
    division,
    largestoftwonumbers,
    largestofthreenumbers,
    factorial,
    evenorodd,
    check,
}