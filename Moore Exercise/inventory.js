function inventory(arr) {

    let items = arr.shift().split(', ');
    let index = 0;
    let newArr = arr.shift().split(' - ');
    let command = newArr[0];
    let resource = newArr[1];

    while (command !== "Craft!") {
        if (command === "Collect") {
            if (items.includes(resource)) {
                newArr = arr.shift().split(' - ');
                command = newArr[0];
                resource = newArr[1];
                continue;
            } else {
                items.push(resource);
            }
        }
        if (command === "Drop") {
            if (items.includes(resource)) {
                let indexOf = items.indexOf(resource);
                items.splice(indexOf, 1);
            } else {
                newArr = arr.shift().split(' - ');
                command = newArr[0];
                resource = newArr[1];
                continue;
            }
        }
        if (command === "Combine Items") {
            let weapon = newArr[1].split(':');
            let oldWeapon = weapon[0];
            let newWeapon = weapon[1];
            if (items.includes(oldWeapon)) {
                let indexOf = items.indexOf(oldWeapon);
                items.push(newWeapon);
            } else {
                newArr = arr.shift().split(' - ');
                command = newArr[0];
                resource = newArr[1];
                continue;
            }
        }
        if (command === "Renew") {
            if (items.includes(resource)) {
                let outputArr = resource;
                items.shift(resource);
                items.push(outputArr);
            }
        }
        newArr = arr.shift().split(' - ');
        command = newArr[0];
        resource = newArr[1];
    }
    console.log(items.join(', '))
}

/* inventory([
    'Iron, Wood, Sword',
    'Collect - Bronze',
    'Collect - Iron',
    'Drop - Wood',
    'Drop - Aii',
    'Combine Items - Sword:Aii',
    'Combine Items - Bea:Bow',
    'Craft!'
]) */

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])

/* inventory(["A, B, C, D",
            "Renew - C",
            "Craft!"]) */