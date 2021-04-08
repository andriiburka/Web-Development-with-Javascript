function f(...x) {
    let sum = 0
    for (let i in x) {
        sum += x[i].length
    }
    let avg = sum / 3
    console.log(sum)
    console.log(Math.floor(avg))
}


// f("chocolate", "ice cream", "cake")
f("pasta", "5", "22.3")