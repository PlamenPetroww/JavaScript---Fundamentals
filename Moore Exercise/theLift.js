function theLift(input) {
 
    let index = 0;
    let peopleCount = Number(input[index]);
    let newInput = input[index + 1].split(" ");
 
    for (let i = 0; i < newInput.length; i++) {
        newInput[i] = Number(newInput[i]);
        console.log(typeof newInput)
 
        while (newInput[i] < 4) {
            newInput[i]++;
            peopleCount--;
        }
        if(peopleCount < 0){
            newInput[i]--;
            break;
        }else if(newInput[i] === 4 && peopleCount === 0){
            console.log(`${newInput.join(' ')}`); 
        }
    }
    if (peopleCount > 0) {
        console.log(`There isn't enough space! ${peopleCount} people in a queue!
        ${newInput.join(' ')}`);
    } else if(peopleCount < 0){
        console.log(`The lift has empty spots!
        ${newInput.join(' ')}`);
    }
}

theLift(["15", "0 0 0 0"])