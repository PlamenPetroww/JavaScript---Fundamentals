function adressBook(data) {

    let result = {};
    for (let line of data) {
        let [name, address] = line.split(':');
        result[name] = address;
    }
    /* let entries = Object.entries(result);
    let sortEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    })
    for (let [name, address] of sortEntries) {
        console.log(`${name} -> ${address}`);
    } */

    // Einz von beide. Beide sind gültig.

    let unsortedKey = Object.keys(result);
    let sortKey = unsortedKey.sort((a, b)=> a.localeCompare(b));
    
    for(let key of sortKey) {
        console.log(`${key} -> ${result[key]}`)
    }
}

adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])