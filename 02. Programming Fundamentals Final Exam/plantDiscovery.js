function plantDiscovery(data) {

    let numberPiecies = +data.shift();
    let plants = {}

    for (let i = 0; i < numberPiecies; i++) {
        let [curPlant, curRarity] = data[i].split('<->');
        plants[curPlant] = {
            rarity: [],
            rating: 0,
            count: 0,
        }
        plants[curPlant].rarity = +[curRarity];
    }
    for(let j = numberPiecies; j < data.length; j++) {
        let token = data[j].split(": ");
        let command = token.shift();

        if(command === "Rate") {
            let [curPlant, curRarity] = token[0].split(' - ');
            if(plants.hasOwnProperty(curPlant)) {
                plants[curPlant].rating += Number(curRarity);
                plants[curPlant].count += 1;
            } else {
                console.log('error');
            }
        }
        if(command === "Update") {
            let [curPlant, curRarity] = token[0].split(' - ');
            if(plants.hasOwnProperty(curPlant)) {
                plants[curPlant].rarity = Number(curRarity);
            } else {
                console.log('error');
            }
        }
        if(command === 'Reset') {
            let curPlant = token[0];
            if(plants.hasOwnProperty(curPlant)) {
                plants[curPlant].rating = 0;
            }
        }
        if (command === 'Exhibition') {
            let aray = Object.entries(plants)
            console.log(`Plants for the exhibition:`); 
            aray.forEach( el => {
                curPlant = el[0]
                curIfn = Object.entries(el[1]) 
                composer = curIfn[0][1]            
                console.log(` - ${curPlant}; Rarity: ${curIfn[0][1]}; Rating: ${(curIfn[1][1] / curIfn[2][1]).toFixed(2)}`);  
            })
 
        }
    } 
}

plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])