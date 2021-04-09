function f(x) {
    let declineMsg = `We can not calculate the circle area, because we receive a ${typeof x}.`
    let circleArea = Math.PI * (x ** 2)
    console.log(typeof x === 'string' ? declineMsg : circleArea.toFixed(2))
}

f(5)