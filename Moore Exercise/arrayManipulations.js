function arrayManipulations(command) {

    let arr = command.shift().split(' ').map(Number)
    for(let i = 0; i < arr.length; i++) {
        let [command, firstNum, secondNum] = command[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        
    }

}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])