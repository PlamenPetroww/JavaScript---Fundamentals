function computerStore(input) {

    command = '';
    let index = 0;
    let parts = Number(input[index]);
    let totalMoney = 0;

    while (input != "special" || input != "regular") {
        if (parts <= 0) {
            console.log("Invalid price!");
            continue;
        }
        for (let i = input;; i++) {
            totalMoney += parts;
            index++;
            parts = Number(input[index]);
        }
    }
}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special'])

for (let i = 0; i <= totalMoney; i++) {
    totalMoney += parts;
    index++;
    parts = Number(input[index]);
}