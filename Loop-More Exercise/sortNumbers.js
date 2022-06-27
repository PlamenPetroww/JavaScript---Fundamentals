function numbers(num1, num2, num3) {

    let maxNumber = Math.max(num1, num2, num3);
    let medium = 0;
    let minNumber = Math.min(num1, num2, num3);

    if(num1 != maxNumber && num1 != minNumber) {
        medium = num1;
    } else if (num2 != maxNumber && num2 != minNumber) {
        medium = num2
    } else if (num3 != maxNumber && num3 != minNumber) {
        medium = num3
    }

    if (minNumber > medium || medium >= maxNumber) {
        medium = minNumber
    }
    console.log(maxNumber + "\r\n" + medium + "\r\n" + minNumber);
}

numbers(2, 1, 3)
//numbers(-2, 1, 3)
//numbers(0, 0, 2)