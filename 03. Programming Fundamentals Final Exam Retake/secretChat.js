function solve(data) {

    let text = data.shift();
    let line = data.shift();

    while (line !== "Reveal") {
        let [command, firstParam, secondParam] = line.split(':|:');
        let startIndex;
        let endIndex;

        switch (command) {
            case "InsertSpace":
                if (startIndex < 0 || startIndex >= firstParam.length) {
                    break;
                }
                let left = text.slice(0, firstParam);
                let right = text.slice(firstParam);
                text = left + ' ' + right;
                console.log(text)
                break;
            case "ChangeAll":
                let oldValue = firstParam;
                let newValue = secondParam;
                let pattern = new RegExp(oldValue, 'g');
                text = text.replace(pattern, newValue);
                console.log(text);
                break;
            case "Reverse":
                if (text.includes(firstParam)){
                    text = text.split(firstParam).join('');
                    text = text.split('');
                    firstParam = firstParam.split('').reverse().join('');
                    text.push(firstParam);
                    text = text.join('');
                    console.log(text);
                    break;
                } else {
                    console.log('error');
                    break;
                }
        }
        line = data.shift();
    }
    console.log(`You have a new text message: ${text}`);
}

solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])