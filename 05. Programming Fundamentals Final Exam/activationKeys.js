function activationKeys(data) {

    let text = data.shift();
    let line = data.shift();

    while (line !== "Generate") {
        let [command, firstParam, secondParam, thirdParam] = line.split('>>>');
        switch (command) {
            case "Slice":
                let startIndex = Number(firstParam);
                let endIndex = Number(secondParam);
                if (startIndex >= 0 && endIndex <= text.length) {
                    let subString = text.substring(startIndex, endIndex);
                    text = text.replace(subString, '');
                    console.log(text);
                    break;
                } else {
                    continue;
                }
            case "Flip":
                let letter = firstParam;
                let startValue = Number(secondParam);
                let endValue = Number(thirdParam);
                let substrOfKey = text.substring(startValue, endValue);
                let newSubstr = '';
                if (letter === "Upper") {
                    newSubstr = substrOfKey.toUpperCase();
                    text = text.replace(substrOfKey, newSubstr);
                    console.log(`${text}`);
                    break;
                } else if (letter === "Lower") {
                    newSubstr = substrOfKey.toLowerCase();
                    text = text.replace(substrOfKey, newSubstr);
                    console.log(`${text}`);
                    break;
                }
            case "Contains":
                let newCh = firstParam;
                if (text.includes(newCh)) {
                    console.log(`${text} contains ${newCh}`);
                } else {
                    console.log(`Substring not found!`);
                }

                break;
        }
        line = data.shift();
    }
    console.log(`Your activation key is: ${text}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
console.log('--------------------');
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])