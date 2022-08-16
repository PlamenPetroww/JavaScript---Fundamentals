function signCheck(numOne, numTwo, numThree) {

    if(numOne >= 0 && numTwo >= 0 && numThree < 0) {
        return "Negative"
    }
    if(numOne < 0 && numTwo < 0 && numThree >= 0) {
        return 'Positive'
    }
    if(numOne < 0 && numTwo < 0 && numThree < 0) {
        return 'Negative';
    }
    if(numOne < 0 && numTwo >= 0 && numThree >= 0) {
        return 'Negative'
    }
    if(numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        return 'Positive';
    }
    if(numOne === 0 || numTwo === 0 || numThree === 0) {
        return 'Positive'
    }
    if(numOne >= 0 && numTwo < 0 && numThree >= 0) {
        return 'Negative';
    }
    if(numOne >= 0 && numTwo < 0 && numThree < 0) {
        return 'Positive';
    }
}

console.log(signCheck(20,
    -12,
    -15))