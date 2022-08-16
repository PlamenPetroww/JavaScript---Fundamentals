function repeatString(string, n) {

    let buff = '';
    let res = '';

    for(let i = 0; i < n; i++) {
        buff += string;
        res = buff
    }
    console.log(res)
}

repeatString("abc", 3);
//repeatString("String", 2)