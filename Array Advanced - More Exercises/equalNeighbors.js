function equalNeighbors(matrix) {

    let equals = 0;

    for(let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        let nextRow = matrix[i + 1];
        if(!matrix.includes(matrix[i + 1])) {
            nextRow = [];
        }
        for(let j = 0; j < currentRow.length; j++) {
            if(currentRow[j] == currentRow[j + 1]) {
                equals++;
            }
            if(currentRow[j] == nextRow[j]) {
                equals++;
            }
        }
    }
        console.log(equals)
}

equalNeighbors([['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']])