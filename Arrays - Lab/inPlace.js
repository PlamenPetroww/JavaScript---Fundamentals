function inPlace(arr) {
    let k = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[k - i];
        arr[k - i] = temp;
    }

    console.log(arr.join(' '))

}
inPlace(["a", "b", "c", "d", "e"])
inPlace([10, 20, 30, 40, 50, 60])