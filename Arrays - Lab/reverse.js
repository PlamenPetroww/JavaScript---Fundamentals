function reverse(n, arr) {

    let slice = [];

    for(let i = 0; i < n; i++) {
        slice.push(arr[i])
    }

    let result = [];
        
    for(let i = slice.length - 1; i >= 0; i--) {
        result.push(slice[i]);
    }
    console.log(result.join(' '));
}

reverse(3, [10, 20, 30, 40, 50])
reverse(4, [-1, 20, 99, 5])
reverse(2, [66, 43, 75, 89, 47])