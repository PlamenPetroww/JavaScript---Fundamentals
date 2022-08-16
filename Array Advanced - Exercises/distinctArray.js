function distinctArray(arr) {

    let resultArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(!resultArr.includes(arr[i])) {
            resultArr.push(arr[i]);
        }
    }
    console.log(resultArr.join(' '))
}

distinctArray([1, 2,1, 2,  3, 4])