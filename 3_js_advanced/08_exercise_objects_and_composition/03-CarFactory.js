function fun(carObj) {
    function getEngine(power) {
        let engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}]
        engines.sort((a, z) => a.power - z.power)
        return engines.find(obj => obj.power >= power)
    }

    return {
        model: carObj.model,
        engine: getEngine(carObj.power),
        carriage: {type: carObj.carriage, color: carObj.color},
        wheels: Array(4).fill(carObj.wheelsize % 2 ? carObj.wheelsize : carObj.wheelsize -= 1) // ES6+
    }
}


console.log(
    fun({model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14})
)
// {
//  model: 'VW Golf II',
//  engine: {power: 90, volume: 1800},
//  carriage: {type: 'hatchback', color: 'blue'},
//  wheels: [13, 13, 13, 13]
//  }


console.log(
    fun({model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17})
)
// {
//  model: 'Opel Vectra',
//  engine: { power: 120, volume: 2400 },
//  carriage: { type: 'coupe', color: 'grey' },
//  wheels: [17, 17, 17, 17]
//  }