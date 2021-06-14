function sumPopulation(towns) {
    let parsedInput = towns.map(row => row.split(' <-> '))
    let townObjects = []

    parsedInput.forEach(row => {
        const name = row[0]
        const population = Number(row[1])
        townObjects.some(obj => obj.name === name) ? (townObjects[0].population) += population : townObjects.push({
            name,
            population
        })
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
