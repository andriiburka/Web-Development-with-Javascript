// 01. Room painting_Условие

function f(x) {
    let paintCount = Number(x.shift());
    let rollsCount = Number(x.shift());
    let glovesPrice = Number(x.shift());
    let brushPrice = Number(x.shift());
    let res = 0;
    let glovesCount = Math.ceil(rollsCount * .35);
    let brushCount = Math.floor(paintCount * .48);
    res = (paintCount * 21.5 + rollsCount * 5.2 + glovesCount * glovesPrice + brushCount * brushPrice) / 15;
    console.log(`This delivery will cost ${res.toFixed(2)} lv.`);
}

f(['1', '3', '10.9', '1'])