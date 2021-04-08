function gcd(num1, num2) {
    let higher = Math.max(num1, num2), lower = Math.min(num1, num2)

    for (let i = lower; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            console.log(i)
            return
        }
    }
}


gcd(15, 5);
gcd(2154, 458);