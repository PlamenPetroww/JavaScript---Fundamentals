function countStringOccurrences(str, word) {

    let arr = str.split(' ');
    arr = arr.filter(x => x === word).length;
    console.log(arr)

}

countStringOccurrences('This is a word and it also is a sentence',
'is')