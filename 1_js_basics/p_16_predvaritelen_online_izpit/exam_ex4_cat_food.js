// 04. Cat Food_Условие

function f(x) {
    let catCount = Number(x.shift())

    let group1 = 0
    let group2 = 0
    let group3 = 0

    let totalGrams = 0

    for (let i in x) {
        let grams = Number(x[i])

        if (grams >= 100 && grams < 200) {
            group1++
        } else if (grams >= 200 && grams < 300) {
            group2++
        } else if (grams >= 300 && grams < 400) {
            group3++
        }
        totalGrams += grams
    }

    let totalFoodPrice = (totalGrams / 1000) * 12.45

    console.log(`Group 1: ${group1} cats.`)
    console.log(`Group 2: ${group2} cats.`)
    console.log(`Group 3: ${group3} cats.`)
    console.log(`Price for food per day: ${totalFoodPrice.toFixed(2)} lv.`)
}

f(["6", "102", "236", "123", "399", "342", "222"])
f(["10", "256", "348", "198", "322", "186", "294", "321", "100", "200", "300"])
f(["7", "100", "200", "342", "300", "234", "123", "212"])
