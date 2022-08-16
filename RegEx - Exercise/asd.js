function solve(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^$%|.]*\<(?<product>\w+)>[^|$%.]*[|](?<count>\d+)[|][^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/g;
    let totalSum = 0;
    let text = input.join('-');
    let current = pattern.exec(text);
    
    while(current) {
        let currentPrice = current.groups.count * current.groups.price;
        console.log(`${current.groups.name}: ${current.groups.product} - ${currentPrice.toFixed(2)}`);
        totalSum += currentPrice;
        current = pattern.exec(text)
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}

solve(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])