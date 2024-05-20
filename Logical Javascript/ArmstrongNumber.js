function isArmstrongNumber(n) {
    let sum = 0;
    let originalNumber = n;
    let numberOfDigits = n.toString().length;

    while (n > 0) {
        let digit = n % 10;
        sum += Math.pow(digit, numberOfDigits);
        n = Math.floor(n / 10);
    }

    return originalNumber === sum;
}

// Test the function
console.log(isArmstrongNumber(153)); // Outputs: true
console.log(isArmstrongNumber(370)); // Outputs: true
console.log(isArmstrongNumber(123)); // Outputs: false