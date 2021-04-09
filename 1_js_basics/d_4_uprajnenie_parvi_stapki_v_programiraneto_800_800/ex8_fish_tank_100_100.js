function freeVolumeCalc(args) {
    let length = Number(args[0]);  // cm
    let width = Number(args[1]);  // cm
    let height = Number(args[2]);  // cm
    let percent = Number(args[3]);

    let vol = length * width * height * .001;  // 299.625 l
    percent *= .01
    let totalLiters = vol * (1  - percent)
    console.log(totalLiters)
}


freeVolumeCalc(["85", "75", "47", "17"])  // 248.68875
freeVolumeCalc(["105", "77", "89", "18.5"])  // 586.445475