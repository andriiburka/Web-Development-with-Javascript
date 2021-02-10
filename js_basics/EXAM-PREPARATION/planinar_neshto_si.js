//Tourist Shop/Store

function ufoo(input) {
    let groups = Number(input.shift());
    let allPeople = Number(input.reduce((a, b) => a + b, 0));
    let musala = [];
    let monblan = [];
    let kilimandjaro = [];
    let k2 = [];
    let everest = [];

    for (let i = 0; i < groups; i++) {
        let currentGroup = Number(input[i]);

        if (currentGroup > 0 && currentGroup <= 5) {
            musala.push(Number(currentGroup));
        } else if (currentGroup <= 12) {
            monblan.push(Number(currentGroup));
        } else if (currentGroup <= 25) {
            kilimandjaro.push(Number(currentGroup));
        } else if (currentGroup <= 40) {
            k2.push(Number(currentGroup));
        } else if (currentGroup > 40) {
            everest.push(Number(currentGroup));
        }
    }
    let musalaPercentage = (musala.reduce((a, b) => a + b, 0) / allPeople * 100).toFixed(2);
    let monblanPercentage = (monblan.reduce((a, b) => a + b, 0) / allPeople * 100).toFixed(2);
    let kilimandjaroPercentage = (kilimandjaro.reduce((a, b) => a + b, 0) / allPeople * 100).toFixed(2);
    let k2Percentage = (k2.reduce((a, b) => a + b, 0) / allPeople * 100).toFixed(2);
    let everestPercentage = (everest.reduce((a, b) => a + b, 0) / allPeople * 100).toFixed(2);

    console.log(`${musalaPercentage}%`);
    console.log(`${monblanPercentage}%`);
    console.log(`${kilimandjaroPercentage}%`);
    console.log(`${k2Percentage}%`);
    console.log(`${everestPercentage}%`);
}


ufoo([10,
    10,
    5,
    1,
    100,
    12,
    26,
    17,
    37,
    40,
    78,]
)

ufoo(5,
25,
41,
31,
250,
6,
)