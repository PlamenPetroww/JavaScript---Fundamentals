function oddOccurrences(data) {

    let res = {};

    let words = data.split(" ");

    for(let word of words) {
        word = word.toLowerCase();
        if(!res.hasOwnProperty(word)) {
            res[word] = 1;
        } else {
            res[word] +=1
        }
    }
    
    let resAlsArray = Object.entries(res).sort((a, b) => b[1] - a[1])

    let arr = []
    for(let [key, value] of resAlsArray) {
        if(value % 2 !== 0) {
            arr.push(key)
        }
    }
    console.log(arr.join(" "))
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')