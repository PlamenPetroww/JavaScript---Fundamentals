function factory(input) {

    let biscuits = Number(input[0]);
    let workers = Number(input[1]);
    let producedBiscuits = Number(input[2]);
    let dayCounter = 0;
    let sumBiscuits = 0;
    let biscuitsWithPercent = 0;
    let total = 0;

    for (let i = 0; i < 30; i++) {
        dayCounter++;
        if (dayCounter % 3 === 0) {
            biscuitsWithPercent += (Math.floor(biscuits * workers) * 0.75);
        } else {
            sumBiscuits += biscuits * workers;
        }
        
        if(sumBiscuits + biscuitsWithPercent === producedBiscuits) {
            break;
        }
    }
    total = sumBiscuits + biscuitsWithPercent;
    console.log(`You have produced ${total} biscuits for the past month.`)
    let difference = Math.abs(total - producedBiscuits);
    if(total > producedBiscuits) {
        let totalBiscuitsInPercent = (difference / producedBiscuits) * 100;
        console.log(`You produce ${totalBiscuitsInPercent.toFixed(2)} percent more biscuits.`);
    } else if (total < producedBiscuits) {
        let asd = producedBiscuits - total;
        let dod = (asd / producedBiscuits) * 100;
        console.log(`You produce ${dod.toFixed(2)} percent less biscuits.`);
    }
}

//factory(["65", '12', '26000'])
factory(['78', '8', '16000'])
//factory(['163', "16", "67020"])