function sumDigit(input) {

    let resToString = String(input);
    let res = 0;
    for(let index = 0; index < resToString.length; index++) {
        let currentDigit = Number(resToString[index])
        res += currentDigit
    }
    console.log(res)

}

sumDigit(245678)