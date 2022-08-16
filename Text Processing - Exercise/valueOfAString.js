function valueOfAString(arr) {
    
    let command = arr.pop();
    let strAsArr = arr[0].split('');
    let sum = 0;
    for(let i = 0; i < strAsArr.length; i++) {
        let currentLetter = strAsArr[i]
        if(command === "LOWERCASE" && (currentLetter.charCodeAt(0) >= 97 && currentLetter.charCodeAt(0) <= 122)) {
            sum += currentLetter.charCodeAt(0);
        }else if (command === "UPPERCASE" && (currentLetter.charCodeAt(0) >= 65 && currentLetter.charCodeAt(0) <= 90)) {
            sum += currentLetter.charCodeAt(0);
        }
    }
    console.log(`The total sum is: ${sum}`)
}

valueOfAString(['HelloFromMyAwesomePROGRAM',
'LOWERCASE'])
console.log('----------')
valueOfAString(['AC/DC',
'UPPERCASE'])