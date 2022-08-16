function deserializeString(input) {

    let info = input.toString().split('');
    let symbol = info.shift();
    let notNeeded = info.shift();
    let myMap = new Map()
    let splited = info.shift().split(', ');
    
    while(symbol !== 'end') {
        let num = splited[0];
        if(!myMap.has(symbol)) {
            myMap.set(symbol, num);
        } else {
            continue;
        }
    }

    /* while (symbol !== "end") {
        index++;
        let num = info[index]
        if (!myMap.has(symbol)) {
            myMap.set(symbol, num);
        } else {
            continue;
        }
        for(let [key, value] of myMap) {
            console.log(key);
        }
    } */

}

deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end'])
//abababa