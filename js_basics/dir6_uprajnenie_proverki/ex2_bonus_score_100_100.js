function bonus(x) {
    let num = Number(x);
    let bonus = 0;

    if (num <= 100) {
        bonus = 5;
    } else if (num > 1000) {
        bonus = num * .10;
    } else {
        bonus = num * .20;
    }

    if (num % 2 === 0) {
        bonus++;
    } else if (num % 5 === 0) {
        bonus += 2;
    }
    console.log(`${bonus}\n${num + bonus}`)
}


bonus(["20"])
bonus(["175"])
bonus(["2703"])
bonus(["15875"])