function numbers(arr) {

    let arrayNumbers = arr.shift().split(' ');
    let i = 0;
    let length = arr.length - 1;
    let command = arr[i];
    let arrNew = [];

    while(command != "Finish") {
        let inputArr = command.split(' ');
        let action = inputArr.shift();
        let num = inputArr[0];
        if(action == "Add") {
            arrayNumbers.push(num);
        }
        if(action == "Remove") {
            if(arrayNumbers.includes(num)) {
                let indexOf = arrayNumbers.indexOf(num);
                arrayNumbers.splice(indexOf, 1);
            }
        }
        if(action == "Replace") {
            if(arrayNumbers.includes(num)) {
                let indexOf = arrayNumbers.indexOf(num);
                let toPushNum = inputArr[1];
                arrayNumbers.splice(indexOf, 1, toPushNum);
            }
        }
        if(action == "Collapse") {
            let asd = Number(num);
            for(let i = 0; i < arrayNumbers.length; i++) {
                if(arrayNumbers.length === arrayNumbers.length) {
                    break;
                }
                let numFromArr = Number(arrayNumbers[i]);
                if(asd > numFromArr) {
                    arrayNumbers.shift(numFromArr);
                    i--;
                } else {
                    arrayNumbers.push(numFromArr);
                    arrayNumbers.shift();
                    i--;
                }
            }
        }
        i++;
        command = arr[i];
    }
    console.log(arrayNumbers.join(' '))
}

numbers(["1 20 -1 10",
        "Collapse 8",
        "Finish"
])