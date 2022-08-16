function train(arr) {

    let passengerInTrainArr = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for(let i = 0; i < arr.length; i++) {

        let commandNum = arr[i].split(' ');
        if(commandNum[0] === "Add") {
            passengerInTrainArr.push(Number(commandNum[1]));
        } else {
            for(let a = 0; a < passengerInTrainArr.length; a++) {
                if(Number(commandNum[0]) + passengerInTrainArr[a] <= maxCapacity) {
                    passengerInTrainArr[a] += Number(commandNum[0]);        
                    break;
                }
            }
        }
    }
    console.log(passengerInTrainArr.join(' '))
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])