function storage(input) {

    let myStore = new Map();

    for(let line of input) {
        let [name, quantity] = line.split(' ');
        if(myStore.has(name)) {
            let oldQuantity = myStore.get(name);
            myStore.set(name, oldQuantity + Number(quantity))
        } else {
            myStore.set(name, Number(quantity))
        }
    }

    for(let [key, value] of myStore) {
        console.log(key, '->', value)
    }

    /* let result = new Map();

    for(let line of input) {
        let [product, quantity] = line.split(' ');
        if(result.has(product)) {
            let oldQuantity = result.get(product);
            result.set(product, oldQuantity + Number(quantity));
        } else {
            result.set(product, Number(quantity));
        }
    }
    for(let [key, value] of result) {
        console.log(key, '->', value)
    } */
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])