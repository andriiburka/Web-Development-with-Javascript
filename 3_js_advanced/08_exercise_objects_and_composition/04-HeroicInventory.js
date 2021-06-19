function fun(input) {
    let arrOfObj = []

    input.forEach(hero => {
        let [name, level, items] = hero.split(' / ')

        function makeObj(name, level, items) {
            return {name, level, items}
        }

        arrOfObj.push(makeObj(name, Number(level), items ? items.split(', ') : []))
    })
    return JSON.stringify(arrOfObj)
}


console.log(
    fun(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])
)
/* JSON
[
    {"name":"Isacc", "level":25, "items":["Apple","GravityGun"]},
    {"name":"Derek", "level":12, "items":["BarrelVest","DestructionSword"]},
    {"name":"Hes", "level":1, "items":["Desolator","Sentinel","Antara"]}
]
*/

console.log()


console.log(
    fun(['Jake / 1000 / Gauss, HolidayGrenade'])
)

/* JSON
[
    {
    "name":"Jake",
    "level":1000,
    "items":["Gauss","HolidayGrenade"]
    }
]
*/