function solve() {

    //.exec() gib immer zurück näcshte match wie Array.

    let text = "Lorem Ipsum is simply dummy text of the printtesting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 1234s a type specimen book."
    let pattern = /(\d+)(s)/g;
    let matches = pattern.exec(text)
    /* console.log(matches)
    matches = pattern.exec(text);
    console.log(matches) */

    // oder ->

    while(matches !== null) {
        console.log(matches);

        matches = pattern.exec(text)
    }
}

solve()