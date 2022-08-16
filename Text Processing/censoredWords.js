function censorenWords(text, word) {

    /* while(text.indexOf(word) >= 0) {
        text = text.replace(word, '*'.repeat(word.length))
    }

    console.log(text) */

    let newText = text.split(word);
    let res = newText.join('*'.repeat(word.length))
    console.log(newText)
}

censorenWords('A small sentence with some words', 'small')
console.log('----------------');
censorenWords('Find the hidden word', 'hidden')