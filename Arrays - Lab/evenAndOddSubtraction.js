function evenAndOddSubtraction(arr) {

    let odd = 0;
    let even = 0;

    for(i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for(let num of arr) {
        if(num % 2 == 0) {
            even += num;
        } else {
            odd += num;
        }
    }
    console.log(even - odd);
}

evenAndOddSubtraction([1,2,3,4,5,6])
evenAndOddSubtraction([3,5,7,9])