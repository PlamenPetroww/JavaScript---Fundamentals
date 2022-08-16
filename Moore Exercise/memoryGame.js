function memoryGame(input) {
    let arr = input.shift().split(' ');
    //arr = arr.map(Number);
    let countMoves = 0;
    let allMatchingElements = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'end') {
            break;
        }
        let currentIndexes = input[i].split(' ');
        let firstIndex = currentIndexes[0];
        let secondIndex = currentIndexes[1];
        let isTheFirstIndexValid = isItInBounds(firstIndex);
        let isTheSecondIndexValid = isItInBounds(secondIndex);
        if (firstIndex === secondIndex || !isTheFirstIndexValid || !isTheSecondIndexValid) {
            countMoves++;
            let middleIndexOfArr = middleOfTheArr(arr);
            let charToInsertInArr = `-${countMoves}a`;
            arr.splice(middleIndexOfArr, 0, charToInsertInArr, charToInsertInArr);
            console.log(`Invalid input! Adding additional elements to the board`);
 
        } else {
            if (arr[firstIndex] === arr[secondIndex]) {
                console.log(`Congrats! You have found matching elements - ${arr[firstIndex]}!`);
                // arr = arr.filter(value => {
                //     return value !== arr[firstIndex] && value !== arr[secondIndex]
                // });
                let elementOfSecondIndex = arr[secondIndex];
                arr.splice(firstIndex, 1);
                let newIndexOfElement = arr.indexOf(elementOfSecondIndex);
                arr.splice(newIndexOfElement,1);
                
                allMatchingElements++;
                countMoves++;
                if (arr.length === 0){
                    break;
                }
            } else if (arr[firstIndex] !== arr[secondIndex]) {
                console.log(`Try again!`);
            }
        }
 
    }
    if (allMatchingElements === input.length - 1 || arr.length === 0) {
        console.log(`You have won in ${countMoves} turns!`);
    } else {
        console.log(`Sorry you lose :(\n${arr.join(' ')}`);
    }
    function isItInBounds(index) {
        if (index >= 0 && index < arr.length) {
            return true;
        } else {
            return false;
        }
    }
    function middleOfTheArr(arr) {
        let theMiddleIndex = Math.floor(arr.length / 2);
        // if (arr.length % 2 === 0) {
        return theMiddleIndex;
        // } else {
        //     return theMiddleIndex;
        // }
    }
 
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])