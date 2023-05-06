
function numbers(input) {

    input = input.split(' ');
    input = input.map(Number)
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    let avgNum = sum / input.length;
    let outputArr = input.filter((x, i) => x > avgNum);
    outputArr.sort((a, b) => b-a);
    outputArr = outputArr.splice(0, 5);
    if(outputArr.length === 0) {
        console.log('No');
    } else {
        console.log(outputArr.join(' '));
    }
}

numbers('10 20 30 40 50')
numbers('1')
