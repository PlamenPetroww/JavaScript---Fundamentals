function bonus(arr) {

    let numberOfStudents = Number(arr.shift());
    let numberOfLectures = Number(arr.shift());
    let addedBonus = Number(arr.shift());
    let arrLength = arr.length;
    let maxVisiting = 0;
    let maxBonus = 0;
    
    for(let i = 0; i < arrLength; i++) {
        let visiting = Number(arr[i]);
        let bonus = 0;
        bonus = visiting / numberOfLectures * (5 + addedBonus);
        if(bonus > maxBonus) {
            maxBonus = bonus;
            maxVisiting = visiting;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxVisiting} lectures.`);
}

bonus([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])