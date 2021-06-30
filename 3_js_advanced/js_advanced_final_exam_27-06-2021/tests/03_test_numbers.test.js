let testNumbers = require("../03_test_numbers")
let {expect} = require("chai")

describe("Tests …", function () {

    describe("Sum Numbers", function () {
        //return undefined
        it("should return undefined - string numbers", function () {
            expect(testNumbers.sumNumbers('1', '2')).to.equal(undefined)
        });
        it("should return undefined if first number is string", function () {
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined)
        });
        it("should return undefined if second number is string", function () {
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined)
        });
        // return sum
        it("should sum two nums and return string of 3.00", function () {
            expect(testNumbers.sumNumbers(1, 2)).to.equal("3.00")
        });
        it("should sum two nums and return 0.50", function () {
            expect(testNumbers.sumNumbers(-1.8, 2.3)).to.equal("0.50")
        });
    });

    describe("Number Checker", function () {
        it("should throw err is not a number", function () {
            expect(() => testNumbers.numberChecker('a')).to.throw('The input is not a number!')
        });

        it("should return that the number is even", function () {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!')
        });

        it("should return that the number is odd", function () {
            expect(testNumbers.numberChecker(-1)).to.equal('The number is odd!')
        });
    });

    describe("Average Sum Array", function () {
        it("should return avg", function () {
            expect(testNumbers.averageSumArray([0,1, 2, 3, 4, 5, 6, 7 ,8, 9, 10])).to.equal(5)
        });


    });
});

