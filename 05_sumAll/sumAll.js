function sumAll(num0,num1) {
    if (typeof(num0) != 'number' || typeof(num1) != 'number' || num1 < 0 || num0 < 0) {
        return 'ERROR';
    }
    if (num0 > num1) {
        let num2 = num1;
        num1 = num0;
        num0 = num2;
    }
    let sum = 0;
    for (let i=0; i < (num1-num0) + 1; i++) {
        sum += num0 + i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
