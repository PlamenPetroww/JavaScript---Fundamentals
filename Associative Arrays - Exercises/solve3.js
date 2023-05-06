function companys(input) {

    let company = {}

    for(let line of input) {
        let tokens = line.split(" -> ");
        let name = tokens[0];
        let id = tokens[1];
        if(!company.hasOwnProperty(name)) {
            company[name] = new Set();
        } 
        company[name].add(id);
    }
    let sorted = Object.entries(company).sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    });
    for(let key of sorted) {
        console.log(key[0]);
        for(let num of key[1]) {
            console.log(`-- ${num}`);
        }
    }
}

companys([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])