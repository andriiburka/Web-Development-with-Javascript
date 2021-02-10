function fuelMoney(a, b, c) {
    let travelDistance = Number(a);
    let passengers = Number(b);
    let literPrice = Number(c);
    let neededFuel = Number(travelDistance) / 100 * 7 + Number(passengers) * .100;
    let expense = Number(neededFuel) * Number(literPrice);
    console.log(`Needed money for that trip is ${expense}lv.`)
}


fuelMoney(260, 9, 2.49)


// function solve(d, p, price) {
//     let neededFuel = (d/100) * 7;
//     neededFuel += p * 0.100;
//     let money = neededFuel * price;
//     console.log(`Needed money for that trip is ${money}lv.`)
// }
//
//
// solve(260, 9, 2.49)