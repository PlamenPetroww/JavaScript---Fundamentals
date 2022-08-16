function adAstra(text) {

    let pattern = /(#|\|)(?<product>[A-Z][a-z]+|[A-Z]+[a-z]|[a-z+ [A-Z]+[a-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<callories>\d+)\1/g;
    let match = pattern.exec(text);
    let callPerDay = 2000;
    let sum = 0;
    let arr = []

    
    while(match !== null) {
        
        let validProduct = match.groups['product'];
        let validDate = match.groups['date'];
        let validCallories = Number(match.groups['callories']);

        arr.push({productName: validProduct, productDate: validDate, productCall: validCallories});

        sum += Number(match.groups.callories);

        match = pattern.exec(text);
    }
    let days = Math.floor(sum / callPerDay);
    
    console.log(`You have food to last you for: ${days} days!`);


    for(let el of arr) {
        console.log(`Item: ${el.productName}, Best before: ${el.productDate}, Nutrition: ${el.productCall}`);
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )
console.log('-----------------');
adAstra(["$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|"])