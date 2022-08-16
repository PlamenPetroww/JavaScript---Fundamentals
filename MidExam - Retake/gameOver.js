function solve(input) {
    let targets = input.shift().split('|');
    let curLine = input.shift();

    let points = 0;

    while (curLine !== "Game over") {
        let ogi = curLine.split(' ');
        let tokens = ogi[0];
        if (tokens === "Shoot") {
            let asd = ogi[1];
            let aktion = asd.split('@')
            let richtung = aktion[0];
            if (richtung === "Left") {
                let startIndex = Number(aktion[1]);
                let length = Number(aktion[2]);
                if (startIndex >= 0 && startIndex <= targets.length - 1) {
                    let indexOf = Number(targets.length - 1);
                    let num = Number(targets[indexOf]);
                    let newNum = num - 5;
                    targets.splice(indexOf, 1, newNum);
                    points += 5;
                    if (num < 5) {
                        points += num;
                        num = 0;
                    } else {
                        curLine = input.shift()
                        continue;
                    }
                }
                if (length > targets.lenght - 1) {
                    let indexOf = Number(targets.length - 1) - 1;
                    let num = Number(targets[indexOf]);
                    let newNum = num - 5;
                    targets.splice(indexOf, 1, newNum);
                    points += 5;
                    if (num < 5) {
                        points += num;
                        num = 0;
                    } else {
                        curLine = input.shift()
                        continue;
                    }
                }
            }
            if (richtung === "Right") {
                let startIndex = Number(aktion[1]);
                let length = Number(aktion[2]);

                if (startIndex >= 0 && startIndex <= targets.length - 1) {
                    let indexOf = Number(targets.length - 1) - 1;
                    let num = Number(targets[indexOf]);
                    let newNum = num - 5;
                    targets.splice(indexOf, 1, newNum);
                    points += 5;
                    if (num < 5) {
                        points += num;
                        num = 0;
                    } else {
                        curLine = input.shift()
                        continue;
                    }
                }
                if (length > targets.length) {
                    let indexOf = Number(targets.length - 1);
                    let num = Number(targets[indexOf]);
                    let newNum = num - 5;
                    targets.splice(indexOf, 1, newNum);
                    points += 5;
                    if (num < 5) {
                        points += num;
                        num = 0;
                    } else {
                        curLine = input.shift()
                        continue;
                    }
                }
            }

        }
        if (tokens === "Reverse") {
            let temp = '';
            let asd = '';
            let k = targets.length - 1;
            for (let i = 0; i < targets.length / 2; i++, k--) {
                temp = targets[k];
                asd = targets[i];
                targets[i] = temp;
                targets[k] = asd;
            }
        }
        curLine = input.shift()
    }
    let sorted = targets.join(' - ');
    console.log(sorted);

    console.log(`John finished the archery tournament with ${points} points!`);
}

solve(["20|30|40|50|60",
    "Shoot Left@0@5",
    "Shoot Right@4@15",
    "Shoot Left@6@5",
    "Reverse",
    "Game over"])
    console.log('--------');
/*solve(["10|10|10|10|10",
    "Shoot Left@0@2",
    "Shoot Right@4@5",
    "Shoot Right@6@5",
    "Reverse",
    "Game over"])*/
