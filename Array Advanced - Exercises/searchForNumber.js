function searchForNumber(arr1, arr2) {

    let ourArr = arr2[0];
    let deleteInt = arr2[1];
    let searchNumber = arr2[2];
    let counter = 0;

    while(ourArr > 0) {
        arr1.splice(0, deleteInt);
        if(arr1.length < ourArr) {
            break;
        }
        if(arr1.includes(searchNumber)) {
            for(let i = 0; i < arr1.length; i++) {
                let myNum = arr1[i];
                if(myNum == searchNumber) {
                    counter++;
                }
            }
        }
        ourArr--;
    }
    console.log(`Number ${searchNumber} occurs ${counter} times.`)
}

searchForNumber([5, 2, 3, 4, 3, 6],
                [7, 2, 3])
                