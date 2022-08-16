function spiceMustFlow(start) {

    let days = 0;
    let spicy = 0;

    while (start >= 100) {
        days++;
        spicy += start - 26;
        start -= 10;
    }
    console.log(days);
    if (days !== 0) {
        console.log(spicy-26)
    } else {
        console.log(spicy)
    }
}

spiceMustFlow(450)