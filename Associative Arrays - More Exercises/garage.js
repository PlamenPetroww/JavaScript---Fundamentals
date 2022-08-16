function garage(data) {

    let garajaMi = {};

    for(let el of data) {
        el = el.split(' - ');
        let name = el.shift(0);
        if(!garajaMi[name]) {
            garajaMi[name] = el;
        } else {
            garajaMi[name].push(...el)
        }
    }

    let key = Object.keys(garajaMi);
    for(let el of key) {
        console.log(`Garage № ${el}`)
        
    let info = garajaMi[el];
    for(let elem of info) {
        while(elem.includes(':')) {
            elem = elem.replace(':', ' -')
        }
        console.log(`---${elem}`)
    }
    }
}

garage(['1 - color: blue, fuel type: diesel', 
'1 - color: red, manufacture: Audi', 
'2 - fuel type: petrol', 
'2 - fuel type: diesel',
'4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])