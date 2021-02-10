function depositCalc(...args) {
    const deposit = parseFloat(args[0]);
    const termOfDeposit = parseInt(args[1]);
    const annualInterestRate = parseFloat(args[2]);
    const result = deposit + termOfDeposit * ((deposit * (annualInterestRate / 100)) / 12)
    console.log(result)
}

depositCalc('200', '3', '5.7')
