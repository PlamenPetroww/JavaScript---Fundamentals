function vakanciq(input) {

    let nujniPariZaEkskurziq = Number(input[0]);
    console.log(nujniPariZaEkskurziq)
    let nalichniPari = Number(input[1]);
    let index = 2;
    let harcheshtiDni = 0;
    let dniBroqch = 0;

    while (nalichniPari < nujniPariZaEkskurziq) {
        let action = input[index];
        index++;
        let sumaPari = Number(input[index]);
        dniBroqch++;
        switch (action) {
            case "spend":
                nalichniPari -= sumaPari;
                if (nalichniPari < 0) {
                    nalichniPari = 0;
                }
                harcheshtiDni++;
                break;
            case "save":
                nalichniPari += sumaPari;
                harcheshtiDni = 0;
                break;
        }
        if (harcheshtiDni >= 5) {
            console.log(`You can't save the money.`);
            console.log(dniBroqch);
            break;
        }
        index++;
    }
    if(nalichniPari >= nujniPariZaEkskurziq) {
        console.log(`You saved the money for ${dniBroqch} days.`);
    }

}

vakanciq(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])