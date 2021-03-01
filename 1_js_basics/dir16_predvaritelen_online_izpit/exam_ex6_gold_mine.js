// 06. Gold Mine_Условие

function f(x) {
    let countLocation = parseInt(x.shift());

    let avgGoldPerDay = 0;
    let daysOnLocation = 0;

    for (let currentLocation = 0; currentLocation < countLocation; currentLocation++) {
        avgGoldPerDay = parseFloat(x.shift());
        daysOnLocation = parseInt(x.shift());

        let average = 0;
        let totalKg = 0;

        for (let j = 0; j < daysOnLocation; j++) {
            totalKg += Number(x.shift());
        }
        average = totalKg / daysOnLocation;
        console.log(average >= avgGoldPerDay ? `Good job! Average gold per day: ${average.toFixed(2)}.` : `You need ${(avgGoldPerDay - average).toFixed(2)} gold.`)
    }
}

f(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"])

