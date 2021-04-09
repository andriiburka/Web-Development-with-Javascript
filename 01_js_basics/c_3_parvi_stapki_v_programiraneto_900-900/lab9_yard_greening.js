function foo(input) {
    let normalPrice = input * 7.61
    let discount = normalPrice * .18
    let finalPrice = normalPrice - discount
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}


foo(["550"])