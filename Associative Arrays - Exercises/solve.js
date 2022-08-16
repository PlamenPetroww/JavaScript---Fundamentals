function piccolo(data) {

    let garage = new Set();

    for(let el of data) {
        let [action, nummer] = el.split(', ');
        if(action === 'IN') {
            garage.add(nummer);
        }
        if(action === "OUT") {
            garage.delete(nummer);
        }
        if(garage.size === 0) {
            console.log('Parking Lot is Empty')
        }
    }

    let sorted = Array.from(garage).sort();
    console.log(`${sorted.join('\n')}`)
    
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])