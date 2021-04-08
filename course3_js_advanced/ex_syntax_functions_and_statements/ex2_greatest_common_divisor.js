/*  2.	Greatest Common Divisor - GCD
    Write a function that takes two positive numbers as input and compute the greatest common divisor.
    The input comes as two positive integer numbers.
    The output should be printed on the console.
*/


function gcd(num1, num2) {
    let higher = Math.max(num1, num2), lower = Math.min(num1, num2)

    for (let i = lower; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            console.log(i)
            return
        }
    }
}


gcd(15, 5);
gcd(2154, 458);