function serializeString(phrase) {
    let string = phrase.toString().split("");
 
    let Infor = new Map();
    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt() >= 33 && string[i].charCodeAt() <= 126) {
        let symbol = string[i];
        let index = i;
        if (!Infor.has(symbol)) {
          Infor.set(symbol, i);
        } else {
          continue
        }
        for (let j = i + 1; j < string.length; j++) {
          if (string[j].charCodeAt() >= 33 && string[j].charCodeAt() <= 126) {
            if (string[i] === string[j]) {
              let curindex = Infor.get(symbol);
              if (!Infor.has(symbol)) {
                Infor.set(symbol, j);
              } else {
                let totalindex = curindex + "/" + "";
                totalindex += j;
                Infor.set(symbol, totalindex);
              }
            }
          }
        }
      }
      }
      //console.log(Array.from(Infor.entries()));
      Array.from(Infor.entries()).forEach(element => {
          let char = element[0]
          let symbol = element[1]
          let text = `${char}:`;
          text += symbol;
          console.log(text);
      });
      }

      serializeString(["aababa"])