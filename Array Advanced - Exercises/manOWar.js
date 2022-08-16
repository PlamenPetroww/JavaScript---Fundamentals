    function manOWar(data) {

        let pirateShip = data.shift().split('>');
        let warShip = data.shift().split('>');
        let maximumHealth = data.shift();
        let isLost = false;

        while (data[0] !== "Retire") {
            let tokens = data.shift().split(' ');
            let command = tokens[0];
            if (command === "Fire") {
                let index = Number(tokens[1]);
                if (index < 0 || index > warShip.length - 1) {
                    continue;
                } else {
                    let pirateShipDamage = Number(tokens[2]);
                    warShip[index] -= pirateShipDamage;
                    if(warShip[index] <= 0) {
                        isLost = true;
                        console.log('You won! The enemy ship has sunken.');
                    }
                }
            }
            if (command === "Defend") {
                let startIndex = +tokens[1];
                let endIndex = +tokens[2];
                let damage = +tokens[3];
                if (startIndex < 0 || startIndex > pirateShip.length || endIndex < 0 || endIndex > pirateShip.length) {
                    command = data[0];
                    continue;
                }
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;
                    if(pirateShip[i] <= 0) {
                        isLost = true;
                        console.log('You lost! The pirate ship has sunken.');
                        break;
                    }
                }
            }
            if (command === "Repair") {
                let index = Number(tokens[1]);
                let health = Number(tokens[2]);
                if (index > 0 || index < pirateShip - 1) {
                    pirateShip[index] = Number(pirateShip[index]);
                    pirateShip[index] += health;
                    if (pirateShip[index] + health <= maximumHealth) {
                        pirateShip[index] = pirateShip[index] + health;
                    }
                } else {
                    pirateShip[index] = maximumHealth;
                }
            }
            if (command === "Status") {
                let counter = 0;
                for (let i = 0; i < pirateShip.length; i++) {
                    if (pirateShip[i] < (maximumHealth * 0.2)) {
                        counter++;
                    }
                }
                console.log(`${counter} sections need repair.`)
            }
            if(isLost) {
                break;
            }
        }
        let iToNumber = 0;
        let sumPirateShip = 0;
        let sumWarShip = 0;
        for (let i = 0; i < pirateShip.length; i++) {
            iToNumber = Number(pirateShip[i])
            sumPirateShip += iToNumber
        }

        for (let i = 0; i < warShip.length; i++) {
            iToNumber = Number(warShip[i]);
            sumWarShip += iToNumber
        }
        if (!isLost) {
            console.log(`Pirate ship status: ${sumPirateShip}`);
            console.log(`Warship status: ${sumWarShip}`);
        }
    }

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
    console.log("----------------")
    manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
