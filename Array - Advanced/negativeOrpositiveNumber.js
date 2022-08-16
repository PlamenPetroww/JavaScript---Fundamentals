function negativeOrPositiveNum(arr) {

    let result = [];

    for (let el of arr) {
        el = Number(el);
        if(el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }
    console.log(result.join('\n'));
}

negativeOrPositiveNum(['7', '-2', '8', '9'])
negativeOrPositiveNum(['3', '-2', '0', '-1'])