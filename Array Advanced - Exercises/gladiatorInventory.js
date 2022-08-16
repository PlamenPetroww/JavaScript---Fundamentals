function gladiator(data) {

    let inventory = data.shift().split(' ');

    for (let i = 0; i < data.length; i++) {
        const element = data[i]
        let tokens = element.split(' ');
        let command = tokens[0]
        if (command === "Buy") {
            let weapon = tokens[1];
            if (inventory.includes(weapon)) {
                continue;
            } else {
                inventory.push(weapon);
            }
        }
        if(command === "Trash") {
            let weapon = tokens[1];
            if(inventory.includes(weapon)) {
                let indexOf = inventory.indexOf(weapon);
                inventory.splice(indexOf, 1);
            }
        }
        if(command === "Repair") {
            let weapon = tokens[1];
            if(inventory.includes(weapon)) {
                let indexOf = inventory.indexOf(weapon);
                inventory.splice(indexOf, 1)
                inventory.push(weapon);
            }
        }
        if(command === "Upgrade") {
            let splited = tokens[1].split('-')
            let weapon = splited[0];
            let newWeapon = splited[1];
            let addedWeapon = weapon + ':' + newWeapon;
            if(inventory.includes(weapon)) {
                let indexOf = inventory.indexOf(weapon);
                inventory.splice(indexOf + 1, 0, addedWeapon)
            }
        }
    }
    console.log(inventory.join(' '))
}

gladiator(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])