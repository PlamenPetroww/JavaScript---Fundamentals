function guineaPig(input) {

    let index = 0;
    let food = Number(input[index]) * 1000;
    index++;
    let hay = Number(input[index]) * 1000;
    index++;
    let clothes = Number(input[index]) * 1000;
    index++;
    let weight = Number(input[index]) * 1000;
    let day = 0;
    
    for(let i = 0; i < 30; i++) {

        day++;
        food -= 300;
        if (day % 2 === 0) {
            hay = hay - (food * 0.05);
        }
        if (day % 3 === 0) {
            clothes = clothes - (weight / 3);
        }

        if (food < 0 || hay < 0 || clothes < 0) {
        console.log("Merry must go to the pet store!");
        break;
        } 
    }

    if (food > 0 && hay > 0 && clothes > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(clothes/1000).toFixed(2)}.`);
    }
}

guineaPig(["10", 
"5", 
"5.2", 
"1"])