function pirates(data) {

    let result = [];
    for (let elem of data) {
        let [city, population, gold] = elem.split('||');
        if (city === "Sail") {
            break;
        }
        population = +population;
        gold = +gold;
        if (!result.hasOwnProperty(city)) {
            result[city] = [];
            result[city].push(population, gold)
        } else {
            result[city][0] += population;
            result[city][1] += gold;
        }
    }
    let indexOf = data.indexOf('Sail');
    let newStart = indexOf + 1;
    let end = data.indexOf('End')
    for (let i = newStart; i <= end; i++) {
        let tokens = data[i].split('=>');
        let command = tokens[0];
        if (command === "Plunder") {
            let city = tokens[1]
            let killedPeople = Number(tokens[2]);
            let newGold = Number(tokens[3]);
            if (result.hasOwnProperty(city)) {
                if (killedPeople > result[city][0] || newGold > result[city][1]) {
                    break;
                }
                console.log(`${city} plundered! ${newGold} gold stolen, ${killedPeople} citizens killed.`);
                result[city][0] -= killedPeople;
                result[city][1] -= newGold;
                if (result[city][0] <= 0 || result[city][1] <= 0) {
                    console.log(`${city} has been wiped off the map!`);
                    delete result[city];
                }
            }
        }
        if (command === "Prosper") {
            let city = tokens[1]
            let newGold = Number(tokens[2]);
            if (newGold < 0) {
                console.log('Gold added cannot be a negative number!');
                continue;
            }
            if (result.hasOwnProperty(city)) {
                result[city][1] = Number(result[city][1]);
                result[city][1] += newGold;
                console.log(`${newGold} gold added to the city treasury. ${city} now has ${result[city][1]} gold.`)
            }
        }
    }

    let cityCounter = 0;
    let arr = Object.entries(result);
    for (let key of arr) {
        cityCounter++;
    }
    if (cityCounter > 0) {
        console.log(`Ahoy, Captain! There are ${cityCounter} wealthy settlements to go to:`);
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    }
    for (let [city, gold] of arr) {
        console.log(`${city} -> Population: ${gold[0]} citizens, Gold: ${gold[1]} kg`);
    }
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])

console.log('-------------------')
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])