function shoppingList(arr) {

    let i = 0;
    let shopList = arr.shift().split('!');
    let command = arr[i];
    let length = arr.length - 1;

    while (command != "Go Shopping!") {
        let inputArr = command.split(' ');
        let action = inputArr.shift();
        let products = inputArr[0];
        if (action == "Urgent") {
            if (shopList.includes(products)) {
                i++;
                command = arr[i];
                continue;
            } else {
                shopList.push(products);
            }
        }
        if (action == "Unnecessary") {
            if (shopList.includes(products)) {
                let indexOf = shopList.indexOf(products);
                shopList.splice(indexOf, 1);
            } else {
                i++;
                command = arr[i];
                continue;
            }
        }
        if (action == "Correct") {
            if (shopList.includes(products)) {
                let indexOf = shopList.indexOf(products);
                i++;
                let toPushproduct = inputArr[i];
                shopList.splice(indexOf, 1, toPushproduct);
                shopList.push(toPush);
            } else {
                i++;
                command = arr[i];
                continue;
            }
        }
        if (action == "Rearrange") {
            if (shopList.includes(products)) {
                let indexOf = shopList.indexOf(products);
                shopList.splice(indexOf, length);
            } else {
                i++;
                command = arr[i];
                continue;
            }
        }
        i++;
        command = arr[i];
    }
    console.log(shopList.join(', '));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])