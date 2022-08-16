function solve(input) {

    let skills = input.shift();

    let curLine = input.shift();

    while (curLine !== "For Azeroth") {

        let tempSkills = '';

        let tokens = curLine.split(' ');
        let command = tokens[0]

        if (command === "GladiatorStance") {
            let subString = skills.substring(0);
            tempSkills = subString.toUpperCase();
            skills = skills.replace(subString, tempSkills);
            console.log(skills)
        }
        else if (command === "DefensiveStance") {
            let subString = skills.substring(0);
            tempSkills = subString.toLowerCase();
            skills = skills.replace(subString, tempSkills);
            console.log(skills)
        }
        else if (command === "Dispel") {
            let index = +tokens[1];
            let letters = tokens[2];
            if (index >= 0 && index < skills.length) {
                tempSkills = skills.split('');
                tempSkills.splice(index, 1, letters);
                skills = tempSkills.join('');
                console.log('Success!');
            } else {
                console.log('Dispel too weak.');
            }
        }
        else if (command === "Target") {
            let action = tokens[1];
            if (action === "Change") {
                let firstSub = tokens[2];
                let secondSub = tokens[3];
                let pattern = new RegExp(firstSub, 'g');
                if (skills.includes(firstSub)) {
                    skills = skills.replace(pattern, secondSub);
                    console.log(skills);
                } else {
                    console.log(skills);
                }
            }
            if (action === "Remove") {
                let subString = tokens[2];
                if (skills.includes(subString)) {
                    skills = skills.replace(subString, '');
                    console.log(skills);
                } 
            }

        } else {
            console.log("Command doesn't exist!");
        }
        curLine = input.shift()
    }

}

solve(["fr1c710n",
    //"GladiatorStance",
    "Dispel 8 I",
    "Dispel 4 T",
    "Target Change RICTION riction",
    "For Azeroth"])
/*     console.log('----------') 
solve(["DYN4MICNIC",
    "Target Remove NIC",
    "Dispel 3 A",
    "DefensiveStance",
    "Target Change d D",
    "target change D d",
    "For Azeroth"])
    console.log('----------')
    solve(["TR1GG3R",
    "Dispel 2 I",
    "Dispel 5 E",
    "For Azeroth"]) */
