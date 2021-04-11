/*
1. Print an Array with a Given Delimiter
The input comes as an array of strings. The last element of the array is the delimiter.
The output is the same array, printed on the console, each element separated from the others by the given delimiter.

Judge:
https://judge.softuni.bg/Contests/Practice/Index/1798#1
*/

function f(x) {
    console.log(x.join(x.pop()))
}

f(['One', 'Two', 'Three', 'Four', 'Five', '-'])
f(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_'])

/*

One-Two-Three-Four-Five
How about no?_I_will_not_do_it!

*/