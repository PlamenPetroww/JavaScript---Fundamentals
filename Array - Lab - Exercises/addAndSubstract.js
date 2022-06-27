function solve(arr) {

    let newArr = [];
    let myNum = 0;
    let totalSum = 0;
    let totalSumWithoutIndex = 0;

    for(let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
        if(arr[i] % 2 === 0) {
            myNum = arr[i] + i;
            arr[i] += i;
            newArr.push(myNum);
        } else {
            myNum = arr[i] - i;
            arr[i] -= i;
            newArr.push(myNum);
        }
        totalSumWithoutIndex += arr[i];
    }
    console.log(newArr);
    console.log(totalSum);
    console.log(totalSumWithoutIndex)
}
//solve([5, 15, 23, 56, 35])
solve([-5, 11, 3, 0, 2])