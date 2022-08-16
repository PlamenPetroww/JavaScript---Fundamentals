function companyUsers(data) {

    let myCompany = {};

    for (let line of data) {
        let [element, id] = line.split(' -> ');
        if (!myCompany.hasOwnProperty(element)) {
            myCompany[element] = new Set();
        }
        myCompany[element].add(id);
    }
    let sorted = Object.entries(myCompany)
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let elem of sorted) {
        console.log(elem[0]);
        for (let number of elem[1]) {
            console.log(`-- ${number}`);
        }
    }

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])