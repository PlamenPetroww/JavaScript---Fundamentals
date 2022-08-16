function solve(input) {

    let index = 0;
    let player = "";
    let golove = 0;
    let vkarani = 0;
    let naiDobriq = "";
    let isHave = true;

    while (player !== "END") {
        player = input[index];
        index++;
        golove = Number(input[index]);
        if (golove > vkarani) {
            vkarani = golove;
            naiDobriq = player;
        }
        if (golove >= 10) {
            console.log(`${player} is the best player!`);
            console.log(`He has scored ${golove} goals and made a hat-trick !!!`);
            isHave = false;
            break;
        }
        index++;
        player = input[index];
    }

    if (player === "END") {
        player = naiDobriq;
        if (golove >= 3) {
            console.log(`${player} is the best player!`);
            console.log(`He has scored ${golove} goals and made a hat-trick !!!`);
        } else if (golove < 3){
            console.log(`${player} is the best player!`);
            console.log(`He has scored ${golove} goals.`);
        }
    }
}

solve(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])