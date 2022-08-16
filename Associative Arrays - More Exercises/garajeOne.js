function solve(data) {

    let moqGaraj = {};

    for(let el of data) {
        el = el.split(' -');
        let nomer = el.shift();
        if(!moqGaraj[nomer]) {
            moqGaraj[nomer] = el;
        } else {
            moqGaraj[nomer].push(...el)
        }
    }

    let key = Object.keys(moqGaraj);
    for(let el of key) {
        console.log(`Garage № ${el}`);
        let info = moqGaraj[el];
        for(let elem of info) {
            while(elem.includes(':')) {
                elem = elem.replace(':', ' -');
            }
            console.log(`---${elem}`)
        }
    }
}

solve(['1 - color: blue, fuel type: diesel', 
'1 - color: red, manufacture: Audi', 
'2 - fuel type: petrol',
'4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])