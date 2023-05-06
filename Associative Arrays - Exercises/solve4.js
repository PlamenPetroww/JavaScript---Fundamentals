function minerTask(input) {

    let res = {};

    for (let i = 0; i <= input.length - 1; i++) {
        let name = input[i];
        let points = Number(input[i + 1]);
        if (!res.hasOwnProperty(name)) {
            res[name] = points;
        } else {
            res[name] += points;
        }
        i++
    }

    let sorted = Object.entries(res)

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value}`)
    }

}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])

console.log("---------")
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])