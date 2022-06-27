function bonusScoringSystem(input) {

    let index = 0;
    let numOfStudent = input[index];
    index++
    let numOfLections = input[index];
    index++;  
    let additionalbonus = input[index];
    index++;

    let bonus = [];

    if(numOfStudent > 0) {

        for(let i = 0; i < numOfStudent; i++) {
        
            let theNextStudent = Number(input[index]);
            let result = (theNextStudent / numOfLections) * ( 5 + Number(additionalbonus));
            bonus.push = (Math.ceil(result));
        }
        bonus.sort((a, b) => b - a);
        input.sort((a, b) => b - a);
        console.log(`Max Bonus: ${bonus[0]}.`)
        console.log(`The student has attended ${input[0]} lectures.`)
    }
}

bonusScoringSystem(['5', '25', '30', '12', '19', '24','16', '20'])