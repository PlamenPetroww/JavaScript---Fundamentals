function solve(num) {

    let rotation = num;
    let myNum = 1;
    let sum = 0;

    while(rotation > 0) {
        rotation--;
        sum += myNum
        console.log(myNum)
        myNum += 2
    }
    console.log(`Sum: ${sum}`)
}

solve(5)