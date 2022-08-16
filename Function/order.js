function order(product, quantity) {

    let coffee = 1.5;
    let water = 1;
    let coke = 1.4;
    let snacks = 2;

    switch (product) {
        case "coffee": result = coffee * quantity; break;
        case 'water': result = water * quantity; break;
        case 'coke': result = coke * quantity; break;
        case 'snacks': result = snacks * quantity; break
    }

    console.log(result.toFixed(2))

}

order("coke", 5)