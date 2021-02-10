function touristExpenses(input) {
    let budget = Number(input.shift());
    let productsArr = [];
    let expensesArr = [];
    let counter = 1

    while (input[0]) {
        if (input[0] === 'Stop') {
            break;

        } else {
            productsArr.push(input.shift());
            if (counter % 3 === 0) {
                expensesArr.push(Number(input.shift()) / 2);
            } else {
                expensesArr.push(Number(input.shift()));
            }
            counter++
        }
    }

    let expenses = expensesArr.reduce((a, b) => a + b, 0);
    let res = Number(budget) - Number(expenses)

    if (res < 0) {
        console.log('You don\'t have enough money!')
        console.log(`You need ${Math.abs(res).toFixed(2)} leva!`)
    } else {
        console.log(`You bought ${counter - 1} products for ${expenses.toFixed(2)} leva.`);
    }
}


touristExpenses([153.20, 'Backpack', 25.20, 'Shoes', 54, 'Sunglasses', 30, 'Stop'])
console.log()
touristExpenses([54, 'Thermal underwear', 24, 'Sunscreen', 45])
