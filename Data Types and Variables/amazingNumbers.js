function amazing(num) {

    let numToString = String(num);
    let result = 0;

    for (let i = 0; i < numToString.length; i++) {
        let num = Number(numToString[i]);
        result += num;
    }
    console.log(`${num} Amazing? ${result.toString().indexOf("9") >= 0 
    ? "True"
    : "False"
    }`)
    //let resToString = String(result);
    //let isAmazing = false;
    //for (let i = 0; i < resToString.length; i++) {
    //    if (Number(resToString[i]) === 9) {
    //        isAmazing = true;
    //        break;
    //    }
    //}
    //let amazing = isAmazing ? "True" : "False";
    //console.log(`${num} Amazing? ${amazing}`);

}

amazing(1233)