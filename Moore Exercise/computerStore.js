function computerStore(input) {

    let money = 0;
    let index = 0;
    let parts = input[index];
    let finalPrice = 0;

    while (parts != "regular" && parts != "special") {

        if (parts > 0) {
            money += Number(parts);
            index++;
            parts = input[index];
        } else {
            console.log("Invalid price!")
            index++;
            parts = input[index];
        }

    }


    if (money <= 0 ) {
        if (parts == "regular" || parts == "special")
        console.log("Invalid order!");
        return;
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${money.toFixed(2)}$`);
    }

    let moneyWithTax = Number((money * 1.2) - money);

    if (parts === "special") {

        finalPrice = (money + moneyWithTax) * 0.9;
        console.log(`Taxes: ${moneyWithTax.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${finalPrice.toFixed(2)}$`)
    }

    if (parts === "regular") {
        if (parts === "regular" && money <= 0) {
            console.log("Invalid order!");
        } else {
            finalPrice = money + moneyWithTax
            console.log(`Taxes: ${moneyWithTax.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${finalPrice.toFixed(2)}$`)
        }
    }

}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])