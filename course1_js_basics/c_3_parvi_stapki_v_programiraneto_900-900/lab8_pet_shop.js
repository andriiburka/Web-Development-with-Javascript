function expenses(input) {
    let dogsExpense = parseInt(input[0]) * 2.50
    let otherAnimalsExpense = parseInt(input[1]) * 4
    let totalExpenses = dogsExpense + otherAnimalsExpense
    console.log(`${totalExpenses} lv.`)
}


expenses(["5", "4"]);