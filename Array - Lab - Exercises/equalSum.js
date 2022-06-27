function solve(arr) {

    let foundIndex = 'no';
    let inputL = arr.length;

    for(let i = 0; i < inputL; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for(let l = 0; l < i; l++) {
            leftSum += arr[l];
        }

        for(let r = i + 1; r < inputL; r++) {
            rightSum += arr[r];
        }

        if(leftSum === rightSum) {
            foundIndex = i;
        }
    }
    console.log(foundIndex);
}

solve([1, 2, 3, 3])