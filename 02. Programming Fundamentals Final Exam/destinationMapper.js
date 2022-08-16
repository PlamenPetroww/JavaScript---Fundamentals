function destinationMapper(data) {

    let pattern = /(=|\/)(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/g;

    let match = pattern.exec(data);
    let box = [];
    let sum = 0;

    while (match) {
        box.push(match.groups.destination);
        sum += match.groups.destination.length;
        match = pattern.exec(data);
    }
    console.log(`Destinations: ${box.join(', ')}`);
    console.log(`Travel Points: ${sum}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")