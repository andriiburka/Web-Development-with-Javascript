let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


console.log(arr.length)
// console.log(arr)

arr.forEach(row => {
    console.log(parseInt(row[arr.length-1][0]))
})