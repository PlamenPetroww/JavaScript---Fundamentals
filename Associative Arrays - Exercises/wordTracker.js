function wordTrcker(input) {

    let secretWord = input.shift().split(' ');
    let result = {};

    for(let word of secretWord) {
        result[word] = 0;
    }

    for(let word of input) {
        if(result.hasOwnProperty(word)) {
            let oldWord = result[word];
            result[word] = oldWord + 1;
        }
    }

    let sorted = Object.entries(result).sort((a, b) => {
        return b[1] - a[1];
    })
    for(let [key, value] of sorted) {
        console.log(key, ':', value)
    }
}

wordTrcker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])