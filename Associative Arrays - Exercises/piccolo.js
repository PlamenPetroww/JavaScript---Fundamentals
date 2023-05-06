/* function piccolo(input) {

    let parking = new Set();

    for(let line of input) {
        let tokens = line.split(', ');
        let direction = tokens[0];
        let autoNumber = tokens[1];
        if(direction === "IN") {
            parking.add(autoNumber);
        }
        if(direction === "OUT") {
            parking.delete(autoNumber);
      }
    }
     if(parking.size === 0) {
       return console.log('Parking Lot is Empty')
     }
    let sorted = Array.from(parking).sort();
    console.log(sorted.join('\n'))
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

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']) */

function piccolo(input) {

  let garage = {};
  let counter = 0;

  for (let line of input) {
    let tokens = line.split(", ");
    let direction = tokens[0];
    let autoNumber = tokens[1];
    if (!garage.hasOwnProperty(autoNumber)) {
      garage[autoNumber] = 1;
      counter++;
    } else {
      delete garage[autoNumber];
      counter--;
    }
  }


  if (counter === 0) {
    return console.log("Parking Lot is Empty");
  
  }
  
  let sorted = Object.entries(garage).sort();
  
  for(let [key, value] of sorted) {
    console.log(key)
  }

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

console.log("----------");

piccolo(['IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'OUT, CA1234TA'])