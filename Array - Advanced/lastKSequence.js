function lastKSequence (n, k) {

    let result = [1];
    for(let i = 0; i < n - 1; i++) {
        let sequenceK = result.slice(-k);
        let sum = 0;
        for(let el of sequenceK) {
            sum += el;
        }
        result.push(sum);
    }
    console.log(result.join(' '))

}

lastKSequence(6, 3)
console.log('------')
lastKSequence(8, 2)