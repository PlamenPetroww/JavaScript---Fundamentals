function serializeString(input) {
    let string = input.toString().split("");

    let info = new Map();

    for (let i = 0; i < string.length; i++) {
        if (string[i].charCodeAt() >= 33 && string[i].charCodeAt() <= 126) {
            let symbol = string[i];
            let index = i;
            if (!info.has(symbol)) {
                info.set(symbol, i);
            } else {
                continue;
            }
            for (let j = i + 1; j < string.length; j++) {
                if (string[j].charCodeAt() >= 33 && string[j].charCodeAt() <= 126) {
                    if (string[i] === string[j]) {
                        let curIndex = info.get(symbol);
                        if (!info.has(symbol)) {
                            info.set(symbol, j);
                        } else {
                            let totalIndex = curIndex + '/' + '';
                            totalIndex += j;
                            info.set(symbol, totalIndex)
                        }
                    }
                }
            }
        }
    }

    info = Array.from(info);

    for (let [key, value] of info) {
        console.log(`${key}:${value}`)
    }


}

serializeString(["avjavamsdmcalsdm"])