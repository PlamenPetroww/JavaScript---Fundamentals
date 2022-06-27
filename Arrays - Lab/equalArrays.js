function equalArrays(arr1, arr2) {

    let res1 = 0;
    let res2 = 0;

    for(let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        res1 += arr1[i];
    }
    for(let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
        res2 += arr2[i];
    }
    
    let areEqual = true;
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            return;
        } 
        if (res1 == res2){
            console.log(`Arrays are identical. Sum: ${res1}`);
            return;
        }
    }
}

equalArrays(['10','20','30'], ['10','20','30'])
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
equalArrays(['1'], ['10'])