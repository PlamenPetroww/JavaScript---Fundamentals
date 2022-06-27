function solve(array) {
    let initialInastalledGames = array
        .shift()
        .split(" ");
 
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element != "Play!") {
            let splitted = element.split(" ");
            let command = splitted[0];
            let game = splitted[1];
 
            switch (command) {
                case "Install":
                    if (!initialInastalledGames.includes(game)) {
                        initialInastalledGames.push(game)
                    }
                    break;
                case "Uninstall":
                    if (initialInastalledGames.includes(game)) {
                        let indexOf = initialInastalledGames.indexOf(game);
                        initialInastalledGames.splice(indexOf, 1);
                    }
                    break;
                case "Update":
                    if (initialInastalledGames.includes(game)) {
                        let indexOf = initialInastalledGames.indexOf(game);
                        let toPushButInArr = initialInastalledGames.splice(indexOf, 1);
                        let toPush = toPushButInArr.join();
                        initialInastalledGames.push(toPush);
                    }
                    break;
                case "Expansion":
                    let splittedExpansions = game.split("-");
                    if (initialInastalledGames.includes(splittedExpansions[0])) {
                        let indexOf = initialInastalledGames.indexOf(splittedExpansions[0]);
                        let toInsert = `${splittedExpansions[0]}:${splittedExpansions[1]}`;
                        initialInastalledGames.splice(indexOf + 1, 0, toInsert);
 
                    }
                    break;
            }
 
        } else {
            console.log(initialInastalledGames.join(" "));
        }
    }
}

solve(['CS WoW Diablo',
    'Install WoW',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])