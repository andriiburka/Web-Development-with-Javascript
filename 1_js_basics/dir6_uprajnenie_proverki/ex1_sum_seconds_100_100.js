function sumSeconds(param) {
    let totalTime = Number(param[0]) + Number(param[1]) + Number(param[2]);
    let mins = 0;
    let secs = 0;

    if (totalTime === 180) {
        mins = 3;
        secs = totalTime - (mins * 60);
    } else if (totalTime >= 120) {
        mins = 2;
        secs = totalTime - (mins * 60);
    } else if (totalTime >= 60) {
        mins = 1;
        secs = totalTime - (mins * 60);
    } else if (totalTime < 60) {
        secs = totalTime;
    }

    if (secs < 10) {
        secs = `0${secs}`;
    }
    console.log(`${mins}:${secs}`)
}

sumSeconds(["35", "45", "44"])
sumSeconds(["22", "7", "34"])
sumSeconds(["50", "50", "49"])
sumSeconds(["14", "12", "10"])

// function summingsecs(input) {
//     let time1 = Number(input[0]);
//     let time2 = Number(input[1]);
//     let time3 = Number(input[2]);
//     let totalTime = time1 + time2 + time3;
//     let min = Math.floor(totalTime / 60);
//     let sec = totalTime % 60;
//
//     if (sec < 10) {
//         console.log(`${min}:0${sec}`)
//     } else {
//         console.log(`${min}:${sec}`)
//     }
// }
//
// summingsecs(["35", "45", "44"])
// summingsecs(["22", "7", "34"])
// summingsecs(["50", "50", "49"])
// summingsecs(["14", "12", "10"])