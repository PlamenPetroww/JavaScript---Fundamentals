function muOnline(arr) {

    let health = 100;
    let bitCoins = 0;
    let newArr = arr.split('|');
    let arrLength = newArr.length;
    let bestRoom = 0;
    let counter = 0;

    for (let i = 0; i < arrLength; i++) {
        let inputArr = newArr.shift().split(' ');
        let monster = inputArr[0];
        let healthCommand = Number(inputArr[1]);
        bestRoom++;
        
        if (monster == "potion") {
             if (health < 100) {
                health += healthCommand;
                if (health >= 100) {
                    let totalHealth = Math.abs(health - healthCommand - 100);
                    health = 100;
                    console.log(`You healed for ${totalHealth} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
                else if(health < 100){
                    console.log(`You healed for ${healthCommand} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
            }
        }
        if (monster == "chest") {
            bitCoins = healthCommand;
            console.log(`You found ${bitCoins} bitcoins.`);
        }
        if (monster != "potion" && monster != "chest") {
            health -= healthCommand;
            if (health < 0) {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            } else if(health >= 0){
                console.log(`You slayed ${monster}.`);
            }
        }
        counter++;
        if (counter >= Number(arrLength)) {
            console.log(`You've made it!`);
            console.log(`Bitcoins: ${bitCoins}`);
            console.log(`Health: ${health}`);
            break;
        }
        
    }
}

//muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("potion 30|orc 10|chest 10|snake 25|chest 110")
