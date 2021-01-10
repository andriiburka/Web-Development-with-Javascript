// 3 - Deposit Calculator
// сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
//
// def func_name(*args) in javascript
// https://www.codegrepper.com/code-examples/javascript/javascript+function+multiple+parameters

function depositCalc(...args) {
    const deposit = parseFloat(args[0]);
    const termOfDeposit = parseInt(args[1]);
    const annualInterestRate = parseFloat(args[2]);
    const result = deposit + termOfDeposit * ((deposit * (annualInterestRate / 100)) / 12);
    console.log(result);
}

depositCalc('200', '3', '5.7')
