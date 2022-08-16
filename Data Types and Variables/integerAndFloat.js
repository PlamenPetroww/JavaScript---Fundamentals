function intOrFloat(numA, numB, numC) {

    let result = numA + numB + numC;
    let resToString = String(result)
    let isFloat = false;
    for(let i = 0; i < resToString.length; i++) {
        if (resToString[i] === ".") {
            isFloat = true;
        }
    }
    console.log(`${result} - ${isFloat ? "Float" : "Integer"}`)
}

intOrFloat(9, 100, 1)