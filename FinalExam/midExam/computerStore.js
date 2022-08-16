function solve(input) {

    let index = 0;
    let sum = 0;

    while (input[index] !== "special") {
        let partPrice = Number(input[index]);
        if (partPrice < 0) {
            console.log('Invalid price!');
            index++;
            continue;
        }
        if (input[index] === "regular") {
            break;
        }
        sum += partPrice;
        partPrice = Number(input[index]);
        index++;
        if (sum <= 0) {
            console.log('Invalid order');
            break;
        }
    }
    if (sum <= 0) {
        console.log('Invalid order!');
    } else {
        console.log("Congratulations you've just bought a new computer!");
        let sumWithTax = sum * 1.2 - sum;
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${sumWithTax.toFixed(2)}$`);
        console.log('-----------');
        let totalSum = 0;
        let end = input.pop();
        if (end === "special") {
            totalSum = (sum + sumWithTax) * 0.9;
        }
        if (end === "regular") {
            totalSum = (sum + sumWithTax)
        }
        console.log(`Total price: ${totalSum.toFixed(2)}$`);
    }
}

solve([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86', 
    'special'
    ])

console.log('-------------')
solve([
    '1023', 
    '15',  
    '-20',   
    '-5.50',  
    '450',
    '20',
    '17.66',
    '19.30',
    'regular'
    ])
console.log('---------------');
solve([
    'regular'
])