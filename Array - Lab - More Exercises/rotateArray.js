function solve(array) {

    let rotation = array.pop();
    
    while(rotation > 0) {
        let elToMove = array.pop();
        array.unshift(elToMove);
        rotation--;
    }
        console.log(array.join(' '))
}

solve(['1', '2', '3', '4', '2'])
console.log('-------');
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])