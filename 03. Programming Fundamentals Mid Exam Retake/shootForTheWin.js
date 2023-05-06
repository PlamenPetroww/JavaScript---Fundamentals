function shootFotTheWin(arr) {

    let target = arr.shift().split(' ').map(Number);
    let i = 0;
    let shootToIndex = arr.shift();
    let arrLength = target.length;
    let count = 0;

    while (shootToIndex != "End") {

        shootToIndex = Number(shootToIndex);
        if (shootToIndex >= 0 && shootToIndex < target.length) {
            for (let i = 0; i < arrLength; i++) {
                let currentTarget = target[shootToIndex]
                if(i !== shootToIndex && target[i] !== -1) {
                    if(target[i] > currentTarget) {
                        target[i] -= currentTarget;
                    }else {
                        target[i] += currentTarget;
                    }
                }
            }
            target[shootToIndex] = -1;
            count++;
        }
        shootToIndex = arr.shift();
    }
    console.log(`Shot targets: ${count} -> ${target.join(' ')}`)
}

shootFotTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])