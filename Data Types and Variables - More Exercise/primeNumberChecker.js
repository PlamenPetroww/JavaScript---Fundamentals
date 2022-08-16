function checker(num) {

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("false")
            return;
        } else {
            console.log("true")
            return;
        }
    }

}
checker(81)