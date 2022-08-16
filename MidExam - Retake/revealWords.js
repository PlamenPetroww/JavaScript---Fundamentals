function revealWords(words, sentence) {

    let wordsToReveal = words.split(', ');
    let sentenceArr = sentence.split(' ');
    let resultSentence = '';

    for (let element of wordsToReveal) {
        for (let word of sentenceArr) {
            if (word.length === element.length && word.includes('*')) {
                sentence = sentence.replace(word, element)
            }
        }
    }
    console.log(sentence)
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')