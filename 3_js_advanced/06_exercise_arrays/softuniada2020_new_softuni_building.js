function hallCalc(width) {
    let height = width / 2 + width

    for (let y = 0; y < height; y++) {
        let arr = []
        for (let x = 0; x < width; x++) {
            let isStripe = (x + y) % 4 === 0
            arr.push(isStripe ? "#" : ".")
        }
        console.log(arr.join(''))
    }
}

hallCalc(50)