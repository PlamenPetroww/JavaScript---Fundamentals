function solve(fightLose,
    helmetPrice,
    swordPrice,
    shieldPrice,
    armorPrice) {

    let repair = 0;
    let losedFight = 0;
    let shieldCount = 0;
    for (let i = 1; i <= fightLose; i++) {

        losedFight++;

        if (losedFight % 2 === 0) {
            repair += helmetPrice;
        }
        if (losedFight % 3 === 0) {
            repair += swordPrice;
        }
        if (losedFight % 6 === 0) {

            repair += shieldPrice;
            shieldCount++;
            
            if (shieldCount % 2 === 0) {
                repair += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${repair.toFixed(2)} aureus`)
}

solve(23,
    12.50,
    21.50,
    40,
    200)