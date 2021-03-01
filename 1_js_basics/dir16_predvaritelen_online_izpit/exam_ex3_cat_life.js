// 03. Cat Life_Условие

function f(x) {
    const breed = x.shift();
    const gender = x.shift();

    let result = 0;

    if (gender === 'm') {
        if (breed === "British Shorthair") {
            result = Math.floor((13 * 12) / 6)
            console.log(`${result} cat months`);
        } else if (breed === 'Siamese') {
            result = Math.floor((15 * 12) / 6)
            console.log(`${result} cat months`);
        } else if (breed === 'Persian') {
            result = Math.floor((14 * 12) / 6)
            console.log(`${result} cat months`);
        } else if (breed === 'Ragdoll') {
            result = Math.floor((16 * 12) / 6)
            console.log(`${result} cat months`);
        } else if (breed === 'American Shorthair') {
            result = Math.floor((12 * 12) / 6)
            console.log(`${result} cat months`);
        } else if (breed === 'Siberian') {
            result = Math.floor((11 * 12) / 6)
            console.log(`${result} cat months`);
        } else {
            console.log(`${breed} is invalid cat!`);
        }
    } else if (gender === "f") {
        if (breed === "British Shorthair") {
            result = Math.floor((14 * 12) / 6)
            console.log(`${result} cat months`);
        } else if (breed === 'Siamese') {
            result = Math.floor((16 * 12) / 6)
            console.log(`${result} cat months`);
        } else if (breed === 'Persian') {
            result = Math.floor((15 * 12) / 6)
            console.log(`${result} cat months`);
        } else if (breed === 'Ragdoll') {
            result = Math.floor((17 * 12) / 6)
            console.log(`${result} cat months`);
        } else if (breed === 'American Shorthair') {
            result = Math.floor((13 * 12) / 6)
            console.log(`${result} cat months`);
        } else if (breed === 'Siberian') {
            result = Math.floor((12 * 12) / 6)
            console.log(`${result} cat months`);
        } else {
            console.log(`${breed} is invalid cat!`);
        }
    }
}

f(["Siberian", "m"])