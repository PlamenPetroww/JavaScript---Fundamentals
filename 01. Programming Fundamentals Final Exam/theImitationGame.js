function theImitationGame(input) {
    let message = input.shift();
    let curLine = input.shift();

    while (curLine !== 'Decode') {
        let tempMessage = '';
        let tokens = curLine.split('|');
        let command = tokens[0];
        if (command === "Move") {
            let lettersNumber = Number(tokens[1]);
            let lettersToMove = message.substring(0, lettersNumber);
            tempMessage = message.replace(lettersToMove, '');
            tempMessage += lettersToMove;
            message = tempMessage
        } else if (command === 'Insert') {
            let index = Number(tokens[1]);
            let value = tokens[2];
            tempMessage = message.split('');
            tempMessage.splice(index, 0, value);
            message = tempMessage.join('');
        } else if (command === "ChangeAll") {
            let substring = tokens[1];
            let replacement = tokens[2];
            while(message.includes(substring)) {
                tempMessage = message.replace(substring, replacement);
                message = tempMessage;
            }
            message = tempMessage
        }
        curLine = input.shift();
    }
    console.log(`The decrypted message is: ${message}`)
}



theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])