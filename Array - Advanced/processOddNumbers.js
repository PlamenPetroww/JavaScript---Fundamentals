function procces(numbers) {

    let filterEl = numbers.filter((el, i)=> i % 2 == 1);

    let doubledNumber = filterEl.map(x=> x * 2);
    let reversednumbers = doubledNumber.reverse();
    console.log(reversednumbers.join(' '))

}

procces([10, 15, 20, 25])