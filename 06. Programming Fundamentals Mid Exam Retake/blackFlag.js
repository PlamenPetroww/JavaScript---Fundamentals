function blackFlag(input) {

    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);
    let totalPlunder = 0;
    let today = 0;

    for(let i = 0; i < days; i++) {
        today++;
        totalPlunder += dailyPlunder;
        if(today % 3 === 0) {
            totalPlunder += dailyPlunder / 2;
        }
        if(today % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }
    if(totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let needed = Math.abs(expectedPlunder - totalPlunder);
        let percentage = Math.abs((needed / expectedPlunder) * 100 - 100);
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}

/* blackFlag(["5",
"40",
"100"]) */

blackFlag((["10",
"20",
"380"]))