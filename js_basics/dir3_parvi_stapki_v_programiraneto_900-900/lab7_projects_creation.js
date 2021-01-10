function calcTime(input) {
    let architectName = input[0];
    let projectsCount = input[1];
    let timeNeeded = projectsCount * 3
    console.log(`The architect ${architectName} will need ${timeNeeded} hours to complete ${projectsCount} project/s.`)
}


calcTime(["George", "4"]);