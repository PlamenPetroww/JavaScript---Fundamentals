function solve(arr1, arr2) {


    let neobhodimiChisla = arr2[0];
    let iztritiChisla = arr2[1];
    let tursenotoChislo = arr2[2];
    let isFound = false;
    let counter = 0;

    let arr3 = []

    arr3 = arr1.splice(0, neobhodimiChisla);
    if(arr3.length < iztritiChisla) {
        counter = 0;
        return console.log(`Number ${tursenotoChislo} occurs ${counter} times.`)
    }
    while (neobhodimiChisla > 1) {
        for (let el of arr3) {
            if (el === tursenotoChislo) {
                isFound = true;
                counter++;
            }
            neobhodimiChisla--;
        }
    }
        console.log(`Number ${tursenotoChislo} occurs ${counter} times.`)
}

solve([7, 1, 5, 8, 2, 7],
    [3, 1, 5])