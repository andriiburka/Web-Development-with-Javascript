function fun(inputArr) {
    let obj = {}
    for (let i = 0; i < inputArr.length; i += 2) {
        obj[inputArr[i]] = Number(inputArr[i + 1])
    }
    console.log(obj)
}


fun(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
// { Yoghurt: 48, Rise: 138, Apple: 52 }

fun(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }