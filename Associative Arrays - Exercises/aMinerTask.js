function aMinerTask(input) {

    let obj = [];

    for(let i = 0; i < input.length; i+=2) {
        let resource = input[i];
        let qunatity = Number(input[i+1]);
        let currQuantity = obj[resource];
        if(obj.hasOwnProperty(resource)) {
            obj[resource] = qunatity + currQuantity;
        } else {
            obj[resource] = qunatity;
        }
    }

    for (let el in obj) {
        console.log(el, '->' , obj[el])
    }
}

/* aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])
console.log('--------------------') */
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])