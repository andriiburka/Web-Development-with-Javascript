// 2 - Radians to Degrees
function radToDeg(radianInput) {
    let degree = (Number(radianInput) * 180 / Math.PI).toFixed(0);
    console.log(degree);
}

radToDeg('3.1416');