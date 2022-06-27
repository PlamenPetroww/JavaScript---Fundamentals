function solve(input) {

    let index = 0;
    let bootle = 0.75;
    let preparationForOnePlate = 0.05;
    let preparationForOnePot = 0.15;
    let command = '';
    let numOfBootels = Number(input[index]);
    index++;
    let leftPreparation = 0;
    let totalPreparation = (bootle * numOfBootels) * 1000;
    let dischwasher = 0;
    let cleanPot = 0;
    let cleanPlate = 0;

    while (command !== "End") {
        
        round = Number(input[index]);
        dischwasher++;
        leftPreparation = 0;
        if (dischwasher % 3 === 0 && dischwasher != 0) {
            leftPreparation = (round * preparationForOnePot) * 100;
            cleanPot += round;
        } else {
            leftPreparation = (round * preparationForOnePlate) * 100;
            cleanPlate += round;
        }
        totalPreparation -= leftPreparation;
        index++;
        command = input[index];
        if(totalPreparation < 0) {
            break;
        }
    }
    if(totalPreparation >= 0) {
        console.log('Detergent was enough!');
        console.log(`${cleanPlate} dishes and ${cleanPot} pots were washed.`);
        console.log(`Leftover detergent ${totalPreparation} ml.`);
    } else {
        let needed = Math.abs(totalPreparation);
        console.log(`Not enough detergent, ${needed} ml. more necessary!`);
    }
}

solve(["1","10","15","10","12","13","30"])