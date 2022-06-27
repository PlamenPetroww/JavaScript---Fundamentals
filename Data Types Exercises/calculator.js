function solve(num1, znak, num2) {

    let res = 0;

    if(znak == "+") {
        res = num1 + num2;
    } else if (znak == "-") {
        res = num1 - num2;
    } else if(znak == "*") {
        res = num1 * num2;
    } else if(znak == "/") {
        res = num1 / num2;
    }
    console.log(res.toFixed(2))
}

solve(25.5,
    '-',
    3)