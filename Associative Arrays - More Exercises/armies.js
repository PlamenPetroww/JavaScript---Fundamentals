function armies(data) {

    let armiesResult = {};
    for (let line of data) {
        let tokens = line.split(' ');

        if (!line.includes("+") && !line.includes(':')) {
            tokens = line.split(' ');
            let command = tokens.pop();
            let name = tokens.join(' ');
            switch (command) {
                case "arrives":
                    armiesResult[name] = {};
                    break;
                case "defeated":
                    delete armiesResult[name];
                    break;
            }
        } else if (line.includes(':')) {
            let tokens = line.split(': ');
            let name = tokens[0];
            let [armiesName, armiesCount] = tokens[1].split(', ');
            if (armiesResult.hasOwnProperty(name)) {
                armiesResult[name][armiesName] = Number(armiesCount);
            }
        } else {
            let tokens = line.split(' + ');
            let name = tokens[0];
            let count = Number(tokens[1])
            for (let [generalName, armies] of Object.entries(armiesResult)) {
                if (armies.hasOwnProperty(name)) {
                    let oldValue = armies[name];
                    armies[name] = oldValue + count;
                }
            }
        }
    }
    let totalArmies = {};

    for (let [generalName, army] of Object.entries(armiesResult)) {
        let sum = 0;
        for (let armyCount of Object.values(army)) {
            sum += armyCount;
        }
        totalArmies[generalName] = sum;
    }

    let sortedTotalArmy = Object.entries(totalArmies).sort(([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA;
    })
    for([generalName, totalArmy] of sortedTotalArmy) {
        console.log(`${generalName}: ${totalArmy}`);
        let sortCountArm = Object.entries(armiesResult[generalName]).sort(([keyA, valueA], [keyB, valueB]) => {
            return valueB - valueA;
        });
        for(let [armyName, armyCound] of sortCountArm) {
            console.log(`>>> ${armyName} - ${armyCound}`)
        }
    }
}

armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'])