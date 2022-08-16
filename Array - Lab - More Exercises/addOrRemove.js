function solve(arr) {

    let number = 1;
    let newArray = [];

    for (const element of arr) {
        if(element === "add") {
            newArray.push(number);
        } else {
            newArray.pop();
        }
        number++;
    }
    if(newArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join(' '));
    }

}

//solve(['add', 'add', 'add', 'add'])
//console.log('-----------')
solve(['add', 'add', 'remove', 'add', 'add'])