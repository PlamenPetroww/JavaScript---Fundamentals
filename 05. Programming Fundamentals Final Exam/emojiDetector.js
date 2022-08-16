function emojiDetector(text) {

    let pattern = /(:{2}|\*{2})([A-Z][a-z]{2,})\1/g;
    let match = pattern.exec(text);

    let regex = /(?<nums>\d{1})/g;
    let matchedRegex = regex.exec(text);

    let arr = [];

    let counter = 0;

    let sum = 1;

    let sumOfEmoji = 0;

    while (matchedRegex !== null) {
        sum *= Number(matchedRegex.groups.nums);
        matchedRegex = regex.exec(text);
    }

    while (match !== null) {

        if (match) {
            counter++;
        }
        let sumOfEmoji = 0;
        for (let ch of match[2]) {
            sumOfEmoji += Number(ch.charCodeAt());
        }
        if (sumOfEmoji > sum) {
            arr.push(match[0]);
        }
        match = pattern.exec(text);
    }
    console.log(`Cool threshold: ${sum}`)
    console.log(`${counter} emojis found in the text. The cool ones are:`)
    for (let emoji of arr) {
        console.log(`${emoji} `);
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
console.log('------------------');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
console.log('------------------');
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
