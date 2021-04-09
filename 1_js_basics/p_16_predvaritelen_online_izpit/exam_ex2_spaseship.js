// 02. Spaceship_Условие

function f(x) {
    const width = parseFloat(x.shift());
    const length = parseFloat(x.shift());
    const height = parseFloat(x.shift());
    const avgAstrosHeight = parseFloat(x.shift());

    let spaceCraftVolume = 2 * 2 * (avgAstrosHeight + 0.4);
    let volume = width * length * height;
    let result = Math.floor(volume / spaceCraftVolume);

    if (result >= 3 && result <= 10) {
        console.log(`The spacecraft holds ${result} astronauts.`);
    } else if (result < 3) {
        console.log(`The spacecraft is too small.`)
    } else if (result > 10) {
        console.log(`The spacecraft is too big.`);
    }
}


f(['3', '3', '4', '1.68', ''])