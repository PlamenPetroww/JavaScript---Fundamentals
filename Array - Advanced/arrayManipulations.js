function arrayManipulations(array) {

    let input = array.shift().split(' ');
    for(let i = 0; i < array.length; i++) {
        //let [command, firstNum, secondNum] = array[i].split(' ');
        let tokens = array[i];
        tokens = tokens.split(' ');
        let action = tokens[0];
        let num = tokens[1];
        if(action === "Add") {
            input.push(num);
        }
        if(action === "RemoveAt") {
                let indexOf = num;
                input.splice(indexOf, 1)
        }
        if(action === "Remove") {
            for(let i = 0; i < input.length; i++) {
                input = input.filter(e => e !== num);
                break;
            }
        }
        if(action === "Insert") {
            let newIndex = tokens[2];
            input.splice(newIndex, 0, num)
        }
        tokens = array[i];
    }
    console.log(input.join(' '))
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])