function solve(dayAsNumber) {

    if(dayAsNumber < 1 || dayAsNumber > 7) {
        console.log("Invalid day!")
    } else {
        let days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ];
    
        let index = dayAsNumber - 1;
    
        console.log(days[index])
    }
}

solve(1)
solve(3)
solve(6)
solve(-3)
solve(33)

