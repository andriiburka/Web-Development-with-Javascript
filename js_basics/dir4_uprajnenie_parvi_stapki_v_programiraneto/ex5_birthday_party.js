// наем за залата: 2250
// цена за тортата: 2250 * 20% = 450
// цена за напитки: 450 – 45% = 247.5
// цена за аниматор: 1 / 3 от 2250 = 750
// необходима сума: 2250 + 450 + 247.5 +750 = 3697.5

function celebrationBudget(rentInput) {
    const rentForHall = parseInt(rentInput);
    const cakePrice = rentForHall * .2;
    const cokesPrice = cakePrice - (cakePrice * .45);
    const animatorSalary = rentForHall / 3;
    const neededMoney = rentForHall + cakePrice + cokesPrice + animatorSalary;
    console.log(neededMoney);
}


celebrationBudget('2250');