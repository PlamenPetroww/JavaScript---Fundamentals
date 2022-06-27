function specialNumbers(n) {

        for(let j = 1; j <= n; j++) {

            let sum = 0;
            let numToString = String(j);

            for(const digit of numToString) {
                sum += Number(digit)
            }

            if (sum == 5 || sum == 7 || sum == 11) {
                console.log(`${j} -> True`);
            } else {
                console.log(`${j} -> False`);
            }
        }
}

specialNumbers(20)