function phoneBook(data) {

    let phoneBooks = new Map();

    for(let line of data) {
        let [name, phoneNumber] = line.split(' ');
        phoneBooks.set(name, phoneNumber)
    }
    for(let [key, value] of phoneBooks) {
        console.log(key ,'->', value)
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])