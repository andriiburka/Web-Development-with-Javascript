/*
4. Rotate Array
Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation.
The input comes as an array of strings. The last element of the array is the amount of rotation you need to perform.
The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.
*/

function rotateArr(x) {
    let rotates = x.pop()
    for (let i = 0; i < rotates % x.length; i++)
        x.unshift(x.pop())
    console.log(x.join(' '))
}

rotateArr(['1', '2', '3', '4', '2'])
// 3 4 1 2

rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
// Orange Coconut Apple Banana