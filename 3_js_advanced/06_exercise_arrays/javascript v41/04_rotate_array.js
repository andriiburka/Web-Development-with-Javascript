function rotateArr(x) {
    let rotates = x.pop()

    for (let i = 0; i < rotates % x.length; i++)
        x.unshift(x.pop())

    console.log(x.join(' '))
}

rotateArr(['1', '2', '3', '4', '2'])
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15'])