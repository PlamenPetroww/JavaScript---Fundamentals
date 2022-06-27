function solve(a, b) {
    let result = 1;
    for(let i = 0; i < b; i++) {
        result = result * a;
    }
    console.log(result)
}

solve(2, 8)