// Вход
// Функцията получава 5 аргумента:
//     1. Броят на дните, в които тече кампанията – цяло число в интервала [0 … 365]
// 2. Броят на сладкарите – цяло число в интервала [0 … 1000]
// 3. Броят на тортите – цяло число в интервала [0… 2000]
// 4. Броят на гофретите – цяло число в интервала [0 … 2000]
// 5. Броят на палачинките – цяло число в интервала [0 … 2000]

function fundraisingCampaign(campaignDays, bakersCount, cakes, waffles, pancakes) {
    const moneyPerDay = bakersCount * (cakes * 45, waffles * 5.80, pancakes * 3.20);
    const moneyPerCampaignDays = moneyPerDay * campaignDays;
    const result = moneyPerCampaignDays - moneyPerCampaignDays * .125;
    console.log(result);
}

fundraisingCampaign('23', '8', '14', '30', '16')
fundraisingCampaign('131', '5', '9', '33', '46')


// v2.0
// function totalSum(daysCount, cookers, cakes, gofers, pancakes) {
//     const total = daysCount * cookers * (cakes * 45 + gofers * 5.8 + pancakes * 3.2)
//     const res = total - (total / 8)
//     console.log(res)
// }
//
//
// totalSum('23', '8', '14', '30', '16')
// totalSum('131', '5', '9', '33', '46')