function solve(arr) {
    let sortedArr = arr.sort();
    for (let i = 0; i < sortedArr.length; i++) {
        console.log(`${i + 1}.${sortedArr[i]}`);
    }
}
solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
console.log('-------');
solve(['Watermelon', 'Banana', 'Apples'])