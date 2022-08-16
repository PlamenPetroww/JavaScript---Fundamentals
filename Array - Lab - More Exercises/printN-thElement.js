function solve(arr) {

    let newArr = [];
    let step = arr[arr.length - 1];

    for(let index = 0; index < arr.length - 1; index++) {
        if (index % step === 0) {
            newArr.push(arr[index]);
        }
    }

    console.log(newArr.join(' '))
}

solve(['5', '20', '31', '4', '20', '2'])
