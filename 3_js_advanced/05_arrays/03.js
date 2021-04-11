/*  3. Negative / Positive Numbers
Write a JS function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of number elements.
The output is printed on the console, each element on a new line. */

// function f(arr) {
//     arr.sort((a, b) => a - b)
//
//     for (let num of arr) {
//         console.log(num)
//     }
// }
//
//
// // f([7, -2, 8, 9])
// f([3, -2, 0, -1])


function f(p) {
    let newArr = []
    for (let num of p)
        num >= 0 ? newArr.push(num) : newArr.unshift(num)
    for (let finalNum of newArr)
        console.log(finalNum)
}

f([7, -2, 8, 9])
f([3, -2, 0, -1])