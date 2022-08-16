function flightSchedule(input) {

    let flight = input.shift();
    let newStatus = input.shift();
    let tatusToCheck = input.shift();
    let allFlight = [];

    for(let elem of flight) {
        let [plane, destination] = elem.split(' ');
        let flight = {
            asd: plane,
            gbg: destination
        };
        allFlight.push(flight)
    }
    for(let elem of newStatus) {
        let [plane, status] = elem.split(' ');

    }
    

}

flightSchedule([['WN269 Delaware',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
])