function f(input) {
    const num = input.shift();
    const inputUnit = input[0];
    const outputUnit = input[1];
    let result = 0;

    if (inputUnit === 'mm') {
        if (outputUnit === 'm') {
            result = num / 1000;
        } else if (outputUnit === 'cm') {
            result = num / 10;
        }
    } else if (inputUnit === 'm') {
        if (outputUnit === 'cm') {
            result = num * 100;
        } else if (outputUnit === 'mm') {
            result = num * 1000;
        }
    } else if (inputUnit === 'cm') {
        if (outputUnit === 'mm') {
            result = num * 10;
        } else if (outputUnit === 'm') {
            result = num / 100;
        }
    }

    console.log(result.toFixed(3))
}


f(["12", "mm", "cm"])  // 0.012
f(["150", "m", "cm"])  // 15000.000
f(["45", "cm", "m"])  // 450.000
