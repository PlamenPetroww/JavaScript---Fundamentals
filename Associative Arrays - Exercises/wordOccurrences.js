function wordOccurrences(data) {

    let result = {};

    for(let word of data) {
        if(!result[word]) {
            result[word] = 0;
        }

        let oldValue = result[word];
        result[word] = oldValue + 1;
    }

    let sorted = Object.entries(result).sort((a, b) => {
        return b[1] - a[1];
    })

    for(let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`)
    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])