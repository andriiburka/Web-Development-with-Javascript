// 05. Christmas Gifts_Условие

function f(x) {
    let adultsCount = 0;
    let kidsCount = 0;
    let moneyForToys = 0;
    let moneyForSweaters = 0;

    let cmd = (x.shift());

    while (cmd !== "Christmas" && cmd !== "") {
        let age = parseInt(cmd);

        if (age <= 16) {
            kidsCount++;
            moneyForToys += 5;
        } else if (age > 16) {
            adultsCount++;
            moneyForSweaters += 15;
        }

        cmd = x.shift();
    }
    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}

