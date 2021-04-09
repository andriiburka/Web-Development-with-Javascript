function f(fruit, weight, money) {
    weight = Number(weight) * .001;
    money = Number(money) * weight;
    console.log(`I need \$${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}


f('orange', 2500, 1.80);
f('apple', 1563, 2.35);