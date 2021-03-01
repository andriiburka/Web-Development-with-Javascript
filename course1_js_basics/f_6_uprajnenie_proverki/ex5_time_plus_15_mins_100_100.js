function f(time) {
    let h = Number(time[0]);
    let m = Number(time[1]) + 15;

    if (m >= 60) {
        h++;
        if (h > 23) {
            h = 0
        }
        m -= 60;
    }

    if (m < 10) {
        m = `0${m}`;
    }

    console.log(`${h}:${m}`)
}

f(["1", "46"])
f(["0", "01"])
f(["23", "59"])
f(["11", "08"])
f(["12", "49"])