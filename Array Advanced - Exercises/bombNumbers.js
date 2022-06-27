function bombNumbers(sequence, specialNumbers) {
    let bomb = specialNumbers[0];
    let deleteInt = specialNumbers[1];
    let sum = 0;
    
     for(let i = 0; i < sequence.length; i++) {
        if(sequence.includes(bomb)) {
            let index = sequence.indexOf(bomb);
            sequence.splice(index - deleteInt, index * 2 + 1)
        }
        sum += Number(sequence[i]);
    }
    console.log(sum)
}

//bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
//            [4, 2])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])