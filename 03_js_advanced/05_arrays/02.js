/*
2.	Even Position Element
Write a function that finds the elements at even positions in an array.
The input comes as array of string elements.
The output is the return value of your function. Collect all elements in a string, separated by space.
*/


function f(x) {
    let arr = []
    for (let i = 0; i < x.length; i++) {
        if (i%2===0) {
            arr.push(x[i])
        }
    }
    console.log(arr.join(' '))
}

f(['20', '30', '40'])
f(['5', '10'])