function needForSpeedIII(input) {
    
    let carNumber = +input.shift()
    let finalList = {}
    for (i = 0; i < carNumber; i++) {
        let startCars = input.shift().split('|')
        let car = startCars[0]
        let mileage = +startCars[1]
        let fuel = +startCars[2]
        finalList[car] = {
            mileage,
            fuel,
        }
  
    }
  
    while (input[0] != 'Stop') {
        let tokens = input.shift().split(' : ')
        let command = tokens[0]
        let car = tokens[1]
        let p1 = +tokens[2]
        let p2 = +tokens[3]
        if (command == 'Drive') {
            if ((finalList[car].fuel - p2) < 0) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                finalList[car].fuel = finalList[car].fuel - p2
                finalList[car].mileage = finalList[car].mileage + p1
                console.log(`${car} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`);
                if (finalList[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete finalList[car]
                }
  
            }
  
        } else if (command == 'Refuel') {
            finalList[car].fuel = finalList[car].fuel + p1
            if (finalList[car].fuel > 75) {
                let temp = p1 - (finalList[car].fuel - 75)
                console.log(`${car} refueled with ${temp} liters`);
                finalList[car].fuel = 75
            } else {
                console.log(`${car} refueled with ${p1} liters`);
            }
  
        } else if (command == 'Revert') {
            finalList[car].mileage = finalList[car].mileage - p1
            if (finalList[car].mileage >= 10000) {
                console.log(`${car} mileage decreased by ${p1} kilometers`);
            } else {
                finalList[car].mileage = 10000
            }
        }
    }
    let result = Object.entries(finalList)
    for (let [car, specifics] of result) {
        console.log(`${car} -> Mileage: ${specifics.mileage} kms, Fuel in the tank: ${specifics.fuel} lt.`);
    }
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