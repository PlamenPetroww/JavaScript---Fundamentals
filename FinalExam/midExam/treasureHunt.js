function solve(input) {

    let state = input.shift().split('|');

    let curLine = input.shift();

    while (curLine !== "Yohoho!") {
        let rest = curLine.split(' ');
        let command = rest[0];
        switch (command) {
            case "Loot":
                let materialOne = rest[1];
                let materialTwo = rest[2];
                let materialThree = rest[3];
                if (!state.includes(materialOne)) {
                    state.unshift(materialOne || materialTwo || materialThree);
                } if (!state.includes(materialTwo)) {
                    state.unshift(materialTwo)
                } if (!state.includes(materialThree)) {
                    state.unshift(materialThree);
                }
                else {
                    curLine = input.shift();
                    continue;
                }
                if (state.includes(undefined)) {
                    let indexOf = state.indexOf(undefined);
                    state.splice(indexOf, 1);
                }
                break;
            case "Drop":
                let index = Number(rest[1]);
                let tempState = '';
                if (index < 0 || index > state.length) {
                    curLine = input.shift();
                    continue;
                }
                let element = state.splice(index, 1);
                state.push(element[0]);
                break;
            case "Steal":
                let count = Number(rest[1]);
                let items = state.splice(-count);
                console.log(items.join(", "))
                break;
        }
        curLine = input.shift();
    }
    
    if(state.length > 0) {
        let sum = 0;
        for(let el of state) {
            sum += el.length;
        }
        let avg = sum / state.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}

solve(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
console.log('---------');
solve(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])