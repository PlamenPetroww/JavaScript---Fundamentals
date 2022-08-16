function solve() {

    let text = "Lorem Ipsum is simply dummy text of the printtesting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    let pattern = /\w+/g;
    let matches = text.match(pattern);
    for(let r of matches) {
        console.log(r)
    }
}

solve()