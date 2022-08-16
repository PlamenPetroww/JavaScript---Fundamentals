function solve(centuri) {

    let year = centuri * 100;
    let day = Math.trunc(year * 365.2422);
    let hour = day * 24;
    let minutes = hour * 60;
    console.log(`${centuri} centuries = ${year} `+`years = ${day} `+`days = ${hour} `+`hours = ${minutes} `+`minutes`) 

}

solve(1)