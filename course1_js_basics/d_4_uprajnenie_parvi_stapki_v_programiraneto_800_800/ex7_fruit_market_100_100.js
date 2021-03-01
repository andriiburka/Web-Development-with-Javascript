function dietCalc(arg) {
    let berriesPrice = Number(arg[0]);
    let bananasWeight = Number(arg[1]);
    let orangesWeight = Number(arg[2]);
    let raspberriesWeight = Number(arg[3]);
    let berriesWeight = Number(arg[4]);

    let raspberriesPrice = berriesPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.4);
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.8);

    let sumRaspberries = raspberriesWeight * raspberriesPrice;
    let sumOranges = orangesWeight * orangesPrice;
    let sumBananas = bananasWeight * bananasPrice;
    let sumBerries = berriesWeight * berriesPrice;

    let result = sumRaspberries + sumOranges + sumBananas + sumBerries;
    console.log(result.toFixed(2))
}

dietCalc(["48", "10", "3.3", "6.5", "1.7"])
dietCalc(["63.5", "3.57", "6.35", "8.15", "2.5"])
