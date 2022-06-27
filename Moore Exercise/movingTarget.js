function movingTarget(arr) {

    let sequenceOfTargets = arr.shift().split(' ');
    let length = sequenceOfTargets.length;
    let i = 0;
    let command = arr[i];

    while (command != "End") {
        command = arr[i];
        let inputArr = command.split(' ');
        let action = inputArr[0];
        let index = Number(inputArr[1]);
        let power = Number(inputArr[2]);
        if (action == "Shoot" && index >= 0 && index < length) {
            sequenceOfTargets[index] -= power;
            if (sequenceOfTargets[index] <= 0) {
                sequenceOfTargets.splice(index, 1);
            }
        } else if (action == "Add") {
            if (index < length && index >= 0) {
                sequenceOfTargets.splice(index, 0, power);
            } else {
                console.log(`Invalid placement!`);
            }
        } else if (action == "Strike") {
            if (index - power >= 0 && index + power < length) {
                sequenceOfTargets.splice(index - power, power + power + 1);
            } else {
                console.log('Strike missed!')
            }
        }
        command = arr.shift();
    }
    console.log(sequenceOfTargets.join('|'))
}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])