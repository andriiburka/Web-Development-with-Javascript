function f(x) {
    let arr = []

    for (let i in x) {
        const row = x[i]
        let o = {}

        if (row.includes('addMovie')) {
            let movieName = row.replace('addMovie ', '')

            if (arr.length === 0) {
                o.name = movieName
                arr.push(o)
                o = {}
            }

            for (let i in arr) {  // проверяваме дали името на филма съществува
                let name = Object.getOwnPropertyNames(arr[i])[0]
                let currentObj = arr[i]
                console.log(currentObj[name] === movieName)

                // if (arr[i].objPropertyName === name) {
                //     arr[i].name = name
                // }
            }

        }
    }
    console.log(arr)
}


f([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'addMovie Fast and Furious',
        'Fast and Furious directedBy Rob Cohen'
    ]
)