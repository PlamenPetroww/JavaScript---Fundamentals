function treasureHunt(arr) {

    let state = arr.shift().split('|');
    let index = 0;
    let command = splited[index];
    index++;
    
    while(command !== "Yohoho!") {
        let tokens = command.split(' ');
        let operation = tokens.shift()

        switch (operation) {
            case "Loot": 
            
                for(let el of tokens) {
                    if(!state.includes(el)) 
                    state.unshift(el);
                }
                break;
            case "Drop": break;
            case "Steal": break;
        }
        command = data[index];
    }
    console.log(state)
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])