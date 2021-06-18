function sumPopulation(towns) {
    let parsedInput = towns.map(row => row.split(' <-> ')), townObjects = []

    parsedInput.forEach(row => {
        const name = row[0], population = Number(row[1])
        townObjects.some(obj => obj.name === name) ? (townObjects[0].population) += population : townObjects.push({ name, population })
    })
    townObjects.forEach(currentTown => console.log(`${currentTown.name} : ${currentTown.population}`))
}

sumPopulation(
    [
        'Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000'
    ]);

// WORK'S AS EXPECTED...
// "Istanbul : 101000
// Honk Kong : 2100004
// Jerusalem : 2352344
// Mexico City : 23401925"

// ===================================================================================================================
//
function solve(arr = []) {
    let towns = {}

    arr.forEach(element => {
        let [name, population] = element.split(' <-> ')
        population = Number(population)
        towns[name] ? towns[name] += population : towns[name] = population;
    });

    for (let town in towns) { console.log(`${town} : ${towns[town]}`)}
}


solve(
    [
        'Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000'
    ]);