function solve() {

    //finden über index

    let text = 'Lorem Ipsum is simply dummy text of the printtesting and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived_ not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with';
    let pattern = /\d+/g;  

    let matches = text.match(pattern);
    console.log(matches[0])

}

solve()