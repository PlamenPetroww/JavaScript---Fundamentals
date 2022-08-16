function solve(input) {

    let text = input.shift();

    let curLine = '';

    let res = [];

    while (curLine !== "Stop") {

        aktion = input[0];

        let tempText = '';

        let tokens = aktion.split(' ')

        let command = tokens[0];

        
        if (command === "Swap") {
            let word1 = tokens[1];
            let word2 = tokens[2];
            if (text.includes(word1)) {
                let result = text.replace(word1, word2)
                text = result
            } if (text.includes(word2)) {
                result = text.replace(word2, word1);
                text = result
            }

        }
        if (command === "Replace") {
            let word1 = tokens[1];
            let word2 = tokens[2];
            let pattern = new RegExp(word2, 'g');
            if (text.includes(word2)) {
                text = text.replace(pattern, word1)
            }
        }
        if (command === "Delete") {
            let index = +tokens[1];
            let newIndex = index + 1;
            res = text.split(" ")
            if (newIndex >= 0 && newIndex <= res.length - 1) {
                res.splice(newIndex, 1)
                text = res.join(" ");
            }
        }
        if (command === "Put") {
            let word = tokens[1];
            let index = +tokens[2];
            res = text.split(" ");
            if ((index - 1) >= 0 && (index - 1) <= text.length) {
                res.splice(index - 1, 0, word)
                text = res.join(" ");
            }
        }

        if (command === "Sort") {
            let sorted = text.sort((a, b) => {
                return b.localeCompare(a);
            })
        }

        curLine = input.shift()
    }
    console.log(text)
}
//Congratulations! You made it through the last challenge!
solve(["Congratulations! You last also through the have challenge!",
    "Swap have last",
    "Replace made have",
    "Delete 2",
    "Put it 4",
    "Stop"])
console.log('-----------')
solve(["Please, follow the instructions!",
"Put You 0",
"Delete 3",
"Replace me you",
"Replace follow know",
"Stop"])
console.log('------------');
solve(["This the my quest! final",
"Put is 2",
"Swap final quest!",
"Delete 2",
"Stop"])