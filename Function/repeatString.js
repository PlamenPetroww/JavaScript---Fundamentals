function repeatString(string, n) {

    let buff = '';
    let res = '';

    for(let i = 0; i < n; i++) {
        buff += string;
    }
    return buff
    
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2))