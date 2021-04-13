function exchange(param) {
    const bitcoins = Number(param[0])
    const yuans = Number(param[1])
    const taxPercents = Number(param[2])
    let btcToBgn = bitcoins * 1168
    let yuanToUsd = yuans * 0.15
    let yoanToBgn = yuanToUsd * 1.76
    let bgn = btcToBgn + yoanToBgn
    let bgnToEur = bgn / 1.95
    let tax = taxPercents / 100 * bgnToEur
    let total = bgnToEur - tax
    console.log(total.toFixed(2))
}
exchange([1, 5, 5])
exchange([20, 5678, 2.4])