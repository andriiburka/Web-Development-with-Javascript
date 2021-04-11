/*
2. Print Every N-th Element from an Array
The input comes as an array of strings. The last element is N - the step.
The output is every element on the N-th step starting from the first one. If the step is "3", you need to print the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. The elements must be printed each on a new line.

Judge:
https://judge.softuni.bg/Contests/Practice/Index/1798#1
*/

function f(x) {
    let step = Number(x.pop())
    for (let el = 0; el < x.length; el += step) {
        console.log(x[el])
    }
}

f(['5', '20', '31', '4', '20', '2'])
// f(['dsa', 'asd', 'test', 'tset', '2'])
// f(['1', '2', '3', '4', '5', '6'])

// 5 \n 31 \n 20
// dsa \n test
// 1
