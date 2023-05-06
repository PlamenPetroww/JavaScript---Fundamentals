function solve(data) {

    let ukazatel = {};
    
    for(let line of data) {
        let tokens = line.split(" ");
        let ime = tokens[0];
        let telefon = tokens[1];
        ukazatel[ime] = telefon;
    }

    for(let key in ukazatel) {
        console.log(key, "->", ukazatel[key])
    }
}

solve(["Paco 0151wsdvsdvsdv",
    "Pesho 0717",
    "Iovko 025",
    "Paco 0152"])