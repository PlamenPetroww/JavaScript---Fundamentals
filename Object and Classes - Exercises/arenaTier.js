function arenaTier(data) {

    let gladiatorPool = {};

    for (let line of data) {
        if (line === "Ave Cesar") {
            break;
        }
        let tokens = line.split(' -> ');
        if (tokens.length > 1) {
            let name = tokens[0];
            let technique = tokens[1];
            let skill = Number(tokens[2]);
            if (!gladiatorPool.hasOwnProperty(name)) {
                gladiatorPool[name] = {};
            }
            if (!gladiatorPool[name].hasOwnProperty(technique)) {
                gladiatorPool[name][technique] = 0;
            }
            let oldSkill = gladiatorPool[name][technique];
            if (oldSkill < skill) {
                gladiatorPool[name][technique] = skill;
            }
        }
        else {
            tokens = tokens[0].split(' vs ');
            let gladiatorA = tokens[0];
            let gladiatorB = tokens[1];
            if (!gladiatorPool.hasOwnProperty(gladiatorA) || !gladiatorPool.hasOwnProperty(gladiatorB)) {
                continue;
            }
            let sumGladiatorA = 0;
            let sumGladiatorB = 0;
            for (let [technique, skill] of Object.entries(gladiatorPool[gladiatorA])) {
                if (gladiatorPool[gladiatorB].hasOwnProperty(technique)) {
                    sumGladiatorA += gladiatorPool[gladiatorA][technique];
                    sumGladiatorB += gladiatorPool[gladiatorB][technique];
                }
            }

            if (sumGladiatorA > sumGladiatorB) {
                delete gladiatorPool[gladiatorB];
            } else if (sumGladiatorA < sumGladiatorB) {
                delete gladiatorPool[gladiatorA];
            }
        }
    }
    let gladiatorTotalSkill = {};
    for(let [gladiatorName, techniquePool] of Object.entries(gladiatorPool)) {
        if(!gladiatorTotalSkill.hasOwnProperty(gladiatorName)) {
            gladiatorTotalSkill[gladiatorName] = 0;
        }
        let sum = 0;
        for(let currentSkill of Object.values(techniquePool)) {
            sum += currentSkill;
        }
        gladiatorTotalSkill[gladiatorName] = sum;
    }
    let sortGladiatorName = Object.entries(gladiatorTotalSkill).sort(([keyA, valueA],[keyB, valueB]) => {
        return valueB - valueA || keyA.localeCompare(keyB);
    });
    for(let [name, points] of sortGladiatorName) {
        console.log(`${name}: ${points} skill`);
        let sortItems = Object.entries(gladiatorPool[name]).sort(([keyA, valueA],[keyB, valueB]) => {
            return valueB - valueA || keyA.localeCompare(keyB);
        })

        for(let [techniqueName, techniqueSkill] of sortItems) {
            console.log(`- ${techniqueName} <!> ${techniqueSkill}`);
        }
    }
}

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])
console.log('---------------');
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
])