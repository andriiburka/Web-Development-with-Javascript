/*
1.	Sum First Last
Write a function that calculates and prints the sum of the first and the last elements in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function.
*/

function sumFirstLast(input) {
    let first = Number(input[0])
    let last = Number(input.slice(-1)[0])
    console.log(first + last)
}


f(['10', '20', '30', '40', '50'])