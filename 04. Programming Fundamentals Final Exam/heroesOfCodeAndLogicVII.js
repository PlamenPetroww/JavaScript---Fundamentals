function heroesOfCodeAndLogicVII(data) {

    let myObj = [];
    let partyHeroes = +data.shift();
    let maxHealth = 100;
    let maxMana = 200;
    for (let i = 0; i < partyHeroes; i++) {
        let [name, health, mana] = data[i].split(' ');
        health = +health;
        mana = +mana

        if (!myObj.hasOwnProperty(name)) {
            myObj[name] = [];
            myObj[name].push(health, mana)
        }
    }


    for (let j = partyHeroes; j < data.length; j++) {
        let tokens = data[j].split(' - ');
        let command = tokens[0];
        let name = tokens[1];
        if (command === "Heal") {
            let addedHealth = Number(tokens[2]);
            if (myObj.hasOwnProperty(name)) {
                if ((addedHealth + myObj[name][0]) > maxHealth) {
                    let newHp = maxHealth - myObj[name][0];
                    console.log(`${name} healed for ${newHp} HP!`);
                    myObj[name][0] = maxHealth;
                } else if((addedHealth + myObj[name][0]) <= maxHealth) {
                    console.log(`${name} healed for ${addedHealth} HP!`)
                    myObj[name][0] += addedHealth;
                }
            }
        }
        if (command === "Recharge") {
            let addedMana = Number(tokens[2]);
            if (myObj.hasOwnProperty(name)) {
                if ((addedMana + myObj[name][1]) > maxMana) {
                    let newMp = maxMana - myObj[name][1];
                    console.log(`${name} recharged for ${newMp} MP!`);
                    myObj[name][1] = maxMana;
                } else if((addedMana + myObj[name][1]) <= maxMana){
                    myObj[name][1] += addedMana;
                    console.log(`${name} recharged for ${addedMana} MP!`);
                }
            }
        }
        if (command === "TakeDamage") {
            let damage = Number(tokens[2]);
            let surchedHero = tokens[3];
            myObj[name][0] -= damage;
            let leftHP = myObj[name][0];
            if (leftHP <= 0) {
                console.log(`${name} has been killed by ${surchedHero}!`);
                delete myObj[name];
            } else {
                console.log(`${name} was hit for ${damage} HP by ${surchedHero} and now has ${leftHP} HP left!`)
            }
        }
        if (command === "CastSpell") {
            let neededMP = Number(tokens[2]);
            let say = tokens[3];
            if (myObj[name][1] >= neededMP) {
                    let leftMP = myObj[name][1] - neededMP;
                    myObj[name][1] -= neededMP;
                    console.log(`${name} has successfully cast ${say} and now has ${leftMP} MP!`);
            } else if (myObj[name][1] < neededMP){
                console.log(`${name} does not have enough MP to cast ${say}!`);
            }
        }
    }

    let arr = Object.entries(myObj);

    arr.forEach(el => {
        curHero = el[0];
        heroInfo = Object.entries(el[1]);
        hero = heroInfo[0][1];
        console.log(`${curHero}
        HP: ${heroInfo[0][1]}
        MP: ${heroInfo[1][1]}`);
    });
}
/*
heroesOfCodeAndLogicVII([

    '1',
  
    'SirMullich 75 120',
  
    'CastSpell - SirMullich - 120 - LighteningStrike',
  
    'End',
  
  ])

*/ console.log('-----------');
heroesOfCodeAndLogicVII(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"])