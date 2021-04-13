/*
5. Extract Increasing Subsequence from Array
Write a function that extracts only those numbers that form a non-decreasing subsequence.
In other words, you start from the first element and continue to the end of the given array of numbers.
Any number which is LESS THAN the current biggest one is ignored,
alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number.
The input comes as an array of numbers.
The output is the processed array after the filtration, which should be a non-decreasing subsequence.
Each element should be printed on a new line.
*/

function increasingSubsequence(x) {
    let biggest = Number.MIN_SAFE_INTEGER
    let arr = []

    for (let i = 0; i < x.length; i++) {
        if (x[i] >= biggest) {
            biggest = x[i]; arr.push(x[i])
        }
    }
    console.log(arr.join('\n'))
}

increasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])
// 1
// 3
// 8
// 10
// 12
// 24

increasingSubsequence([1, 2, 3, 4])
// 1
// 2
// 3
// 4


increasingSubsequence([20, 3, 2, 15, 6, 1])
// 20
