function reverseInPlace(arr) {

    let temp = '';
    let asd = '';
    let k = arr.length - 1

    for(let i = 0; i < arr.length / 2; i++, k--) {
        temp = arr[k];
        asd = arr[i];
        arr[i] = temp;
        arr[k] = asd;
    }
    console.log(arr.join(' '))
}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])