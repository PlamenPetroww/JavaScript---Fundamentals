function solve(input) {

    let string = input.shift();

    let sum = 0;

    for (let i = 0; i < input.length; i++) {

        let [command, firstParam, secondParam] = input[i].split(' ');

        let tempText = '';


        if (string.length > 8 && string[i].charCodeAt() >= 48 || string[i].charCodeAt() <= 57 && string[i].charCodeAt() >= 65
            || string[i].charCodeAt() <= 90 && string[i].charCodeAt() >= 97 || string[i].charCodeAt() <= 122 && string.icnludes('_')) {


            if (command === "Replace") {
                let char = firstParam;
                let index = +secondParam;
                char = char.charCodeAt(0)
                newCharNumber = index + char;
                newCharNumber = String.fromCharCode(newCharNumber);
                if (!string.includes(firstParam)) {
                    continue;
                }
                if (string.includes(firstParam)) {
                    while (string.includes(firstParam)) {
                        tempText = string.replace(firstParam, newCharNumber);
                        string = tempText;
                    }
                }
                string = tempText;
                console.log(string)
            }
            if (command === "Make") {
                let index = +secondParam;
                let subOfStr = string.substring(index, index + 1);
                if (firstParam === "Upper") {
                    tempText = subOfStr.toUpperCase();
                    string = string.replace(subOfStr, tempText);
                    console.log(string)
                } else if (firstParam === "Lower") {
                    tempText = subOfStr.toLowerCase();
                    string = string.replace(subOfStr, tempText);
                    console.log(string)
                }
            }
            if (command === "Insert") {
                if (firstParam < 0 || firstParam >= string.length) {
                    continue;
                }
                tempText = string.split('');
                firstParam = +firstParam
                tempText.splice(firstParam, 0, secondParam);
                string = tempText.join('');
                console.log(string)
            }
            if (command === "Validation") {
                if (string.length < 8) {
                    console.log('Password must be at least 8 characters long!');
                }
                else if (!string.includes('_') || string.charCodeAt() >= 65 && string.charCodeAt() <= 90 || string.charCodeAt() >= 97 && string.charCodeAt() <= 122) {
                    console.log('Password must consist only of letters, digits and _!')
                }

                else if (string.charCodeAt() >= 65 && string.charCodeAt() <= 90) {
                    console.log('Password must consist at least one uppercase letter!');
                }
                else if (string.charCodeAt() >= 97 && string.charCodeAt() <= 122) {
                    console.log('Password must consist at least one lowercase letter!');
                }
                else if (string.charCodeAt() < 48 && string.charCodeAt() > 57) {
                    console.log('Password must consist at least one digit!');
                }
                else {
                    continue;
                }
            }
        }

    }

}

solve(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])
console.log('---------');
solve(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'])