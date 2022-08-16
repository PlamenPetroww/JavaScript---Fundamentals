function passwordReset(input) {
    let password = input.shift();
    let curLine = input.shift();
    let arr = [];

    while (curLine !== "Done") {

        let [command, firstParam, secondParam] = curLine.split(' ');
        let tempPass = '';

        if (command === "TakeOdd") {
            for (let i = 1; i < password.length; i += 2) {
                arr.push(password[i]);
                tempPass = arr.join('');
            }
            password = tempPass;
            console.log(password)
        }
        if (command === "Cut") {
            let index = Number(firstParam);
            let length = Number(secondParam);
                tempPass = password.split('');
                tempPass.splice(index, length);
                password = tempPass.join('');
                console.log(password);

        }
        if (command === "Substitute") {
            let oldValue = firstParam
            let newValue = secondParam;
            if (password.includes(oldValue)) {
                let pattern = new RegExp(oldValue, 'g');
                tempPass = password.replace(pattern, newValue);
                password = tempPass
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }
        curLine = input.shift();
    }
    console.log(`Your password is: ${password}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 1 21",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])