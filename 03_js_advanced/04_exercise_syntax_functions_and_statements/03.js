/*  3.	Same Numbers
    Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
    Print on the console true if all numbers are same and false if not. On the next line print the sum of all digits.
    The input comes as an integer number.
    The output should be printed on the console.
 */


function f(x) {
    let stringNumber = x.toString()
    let isSame = true
    let sum = 0

    for (let i = 0; i < stringNumber.length; i++) {
        sum += Number(stringNumber[i])

        if ((stringNumber[i + 1] !== undefined) && (stringNumber[i] !== stringNumber[i + 1])) {
            isSame = false
        }
    }
    console.log(isSame)
    console.log(sum)
}


f(2222222)
f(1234)