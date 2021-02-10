function celebrationBudget(rentInput) {
    const rentForHall = parseInt(rentInput)
    const cakePrice = rentForHall * .2
    const cokesPrice = cakePrice - (cakePrice * .45)
    const animatorSalary = rentForHall / 3
    const neededMoney = rentForHall + cakePrice + cokesPrice + animatorSalary
    console.log(neededMoney)
}


celebrationBudget('2250');