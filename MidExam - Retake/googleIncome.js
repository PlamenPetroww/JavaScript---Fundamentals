function solve(input) {

    let googleIncome = Number(input.shift());

    let numberOfusers = Number(input.shift());

    let sum = 0;

    let index = 1;

    let user = '';

    for(let el of input) {
        el = Number(el);
        if(el === 1) {
            index++;
            continue;
        }
        if(el > 5) {
            sum += el * googleIncome * 2;
            /* if(index % 3 === 0) {
                sum += el * 2;
            } */
        }
        if(index % 3 === 0) {
            sum += el * googleIncome * 3;
            if(el === 1) {
                index++;
                continue;
            }
            if(el > 5) {
                sum += googleIncome * 2;
            }
        }
        index++;
    }
    console.log(`Total money earned: ${sum.toFixed(2)}`);
}

solve(["5.5",
    "3",
    "1",
    "10",
    "5"])
console.log('----------') 
solve(["0.5",
"6",
"3",
"5",
"16",
"0",
"6",
"1"])
solve(["3.0",
"7",
"0",
"1",
"2",
"3",
"4",
"6",
"15"])