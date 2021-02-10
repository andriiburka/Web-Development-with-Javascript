function sumSeconds(param) {
    let totalTime = Number(param[0]) + Number(param[1]) + Number(param[2])
    let mins = 0;
    let secs = 0;

    if (totalTime === 180) {
        mins = 3
        secs = totalTime - (mins * 60)
    } else if (totalTime >= 120) {
        mins = 2
        secs = totalTime - (mins * 60)
    } else if (totalTime >= 60) {
        mins = 1
        secs = totalTime - (mins * 60)
    } else if (totalTime < 60) {
        secs = totalTime
    }

    if (secs < 10) {
        secs = `0${secs}`
    }
    console.log(`${mins}:${secs}`)
}


sumSeconds(["35", "45", "44"])
sumSeconds(["22", "7", "34"])
sumSeconds(["50", "50", "49"])
sumSeconds(["14", "12", "10"])
