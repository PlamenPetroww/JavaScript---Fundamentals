function needForSpeedIII(input) {

    let numberOfCars = input.shift();
    let arr = [];
    let maxTank = 75;

    for (let i = 0; i < numberOfCars; i++) {

        let tokens = input.shift().split('|');
        let car = tokens[0];
        let kilometers = +tokens[1];
        let fuel = +tokens[2];
        if (!arr.includes(car)) {
            arr[car] = [];
            arr[car].push(kilometers, fuel);
        }
    }

    while (input[0] !== 'Stop') {
        let tokensInfo = input.shift().split(' : ');
        let command = tokensInfo[0];
        let currentCar = tokensInfo[1];
        let distance = +tokensInfo[2];
        let currentFuel = +tokensInfo[3];
        if (command === "Drive") {
            if ((arr[currentCar][1] - currentFuel) < 0) {
                console.log('Not enough fuel to make that ride');
            } else {
                arr[currentCar][1] -= currentFuel;
                arr[currentCar][0] += distance;
                console.log(`${currentCar} driven for ${distance} kilometers. ${currentFuel} liters of fuel consumed.`);
            }
            if (arr[currentCar][0] >= 100000) {
                console.log(`Time to sell the ${currentCar}!`);
                delete arr[currentCar];
            }
        } else if (command === "Refuel") {
            arr[currentCar][1] += distance;
            if (arr[currentCar][1] >= maxTank) {
                distance = Math.abs(arr[currentCar][1] - maxTank - distance)
                arr[currentCar][1] = maxTank;
            } 
            console.log(`${currentCar} refueled with ${distance} liters`);
        } else if (command === "Revert") {
            if ((arr[currentCar][0] - distance) <= 10000) {
                arr[currentCar][0] = 10000;
                break;
            } else {
                console.log(`${currentCar} mileage decreased by ${distance} kilometers`);
                arr[currentCar][0] -= distance;
            }
        }
    }

    let arrToObj = Object.entries(arr);

    arrToObj.forEach(el => {
        currentCar = el[0];
        curCar = Object.entries(el[1]);
        car = curCar[0][1];
        console.log(`${currentCar} -> Mileage: ${curCar[0][1]} kms, Fuel in the tank: ${curCar[1][1]} lt.`)
    });

}

needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])

console.log('----------------');
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 200000 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])