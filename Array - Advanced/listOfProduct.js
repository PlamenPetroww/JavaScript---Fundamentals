/* function solve(arr) {

    arr.sort((a, b) => b - a)
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}. ${arr[i]}`);
    }

} */

function solve(arr) {
    let sortedArr = arr.sort();
    for (let i = 0; i < sortedArr.length; i++) {
        console.log(`${i + 1}.${sortedArr[i]}`);
    }
}
solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
console.log('-------');
solve(['Watermelon', 'Banana', 'Apples'])