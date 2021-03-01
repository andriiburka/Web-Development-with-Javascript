function swimmingRecordCalc(x) {
    let recordInSeconds = Number(x[0])
    let lengthInMeteres = Number(x[1])
    let secondsPerMeter = Number(x[2])

    let delay = (Math.floor(lengthInMeteres / 15)) * 12.5
    let totalSeconds = lengthInMeteres * secondsPerMeter + delay

    if (totalSeconds < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalSeconds.toFixed(2)} seconds.`)
    } else {
        let diff = Math.abs(recordInSeconds - totalSeconds)
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
}

swimmingRecordCalc(["10464", "1500", "20"])
swimmingRecordCalc(["55555.67", "3017", "5.03"])
