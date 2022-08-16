function solve(arr) {

    let newArr = arr.shift().split(' ');
    let command = arr.shift().split(' ');
    let action = command[index];
    
    while(action !== "end"){
        let temp = 0;
        let num1 = command[1];
        let num2 = command[2];
        if(action === "swap") {
            temp = newArr[num1];
            newArr[num1] = newArr[num2];
            newArr[num2] = temp;
        }
        if(action === "multiply") {
            temp = newArr[num1] * newArr[num2];
            console.log(asd)
        }
        index++;
    }

}

solve( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])
