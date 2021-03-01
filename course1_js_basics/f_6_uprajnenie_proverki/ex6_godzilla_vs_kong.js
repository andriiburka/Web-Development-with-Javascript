function f(input) {  // 80/100
    let movieBudget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let extrasClothesPrice = Number(input[2]);

    if (extrasCount > 150) {
        extrasClothesPrice -= extrasClothesPrice * .10
    }

    let decorValue = movieBudget * .10;
    movieBudget = movieBudget - (extrasCount * extrasClothesPrice + decorValue);

    if (movieBudget > 0) {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${movieBudget.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${movieBudget} leva more.`)
    }
}

// function budgetCalc(x) {
//     let movieBudget = Number(x[0]);
//     let extrasCount = Number(x[1]);
//     let extrasClothesPrice = extrasCount * Number(x[2]);
//     let decor = movieBudget * .1;
//
//     if (extrasCount > 150) {
//         extrasClothesPrice -= (extrasClothesPrice * .1)
//     }
//
//     let expenses = decor + extrasClothesPrice
//     movieBudget -= expenses
//
//     if (movieBudget >= 0) {
//         console.log(`Action!`)
//         console.log(`Wingard starts filming with ${movieBudget.toFixed(2)} leva left.`)
//     } else {
//         console.log(`Not enough money!`)
//         console.log(`Wingard needs ${Math.abs(movieBudget.toFixed(2))} leva more.`)
//     }
// }
//
// budgetCalc(["20000", "120", "55.5"])
// budgetCalc(["15437.62", "186", "57.99"])
// budgetCalc(["9587.88", "222", "55.68"])
