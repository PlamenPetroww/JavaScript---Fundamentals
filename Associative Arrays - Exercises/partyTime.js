/*function party(data) {

    let arrVip = [];
    let arrNomal = [];
    let vipCounter = 0;
    let normalCounter = 0;
    let isParty = false;

    for (let guest of data) {
        if (guest === "PARTY") {
            isParty = true;
            continue;
        }
        if (!isParty) {
            if (guest[0] === "1" || guest[0] === "2" || guest[0] === "3" || guest[0] === "4" || guest[0] === "5" || guest[0] === "6" ||
                guest[0] === '7' || guest[0] === "8" || guest[0] === "9") {
                vipCounter++;
                arrVip.push(guest);
            } else {
                normalCounter++;
                arrNomal.push(guest);
            }
        } else {
            if (arrVip.includes(guest)) {
                let indexOf = arrVip.indexOf(guest);
                arrVip.splice(indexOf, 1)
            }
            if (arrNomal.includes(guest)) {
                let indexOf = arrNomal.indexOf(guest);
                arrNomal.splice(indexOf, 1);
            }
            else {
                continue;
            }
        }
    }

    let total = arrVip.length + arrNomal.length;
    console.log(total)
    for (let code of arrVip) {
        console.log(code)
    }
    for (let code of arrNomal) {
        console.log(code)
    }

}

 party(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]) 

party(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])*/

function party(input) {

    let res = [];
    let vipPeople = [];
    let normalPeople = [];
    let vipConsole = [];
    let normalConsole = [];
    let counter = 0;
    let isParty = false;

    for (let word of input) {
        if (word === "PARTY") {
            isParty = true;
            continue;
        }
        if (!isParty) {
            if (word[0] === 1 || word[0] === 2 || word[0] === 3
                || word[0] === 4 || word[0] === 5 || word[0] === 6 ||
                word[0] === 7 || word[0] === 8 ||
                word[0] === 9 || word[0] === 0) {
                vipPeople.push(word)
                
            } else {
                normalPeople.push(word)
                
            }
        } else {
            if (vipPeople.includes(word)) {
                let indexOf = vipPeople.indexOf(word);
                vipPeople.splice(indexOf, 1);
            }
            if (normalPeople.includes(word)) {
                let indexOf = normalPeople.indexOf(word);
                normalPeople.splice(indexOf, 1)
            }
        }
    }
    let total = vipPeople.length + normalPeople.length;
    console.log(total)


    for(let code of vipPeople) {
        console.log(code)
    }
    for(let code of normalPeople) {
        console.log(code)
    }

}

/* party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])

console.log("---------------") */
party(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])