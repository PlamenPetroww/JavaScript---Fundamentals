function main(pass) {

    let array = pass.split('');
    let digitCounter = 0;
    let lettersCounter = 0;
    let currentNum = 0;
    let isPass = false;

    for (let i = 0; i < array.length; i++) {
        currentNum = array[i].charCodeAt();
        if (currentNum >= 48 && currentNum <= 57) {
            digitCounter++;
        }
        lettersCounter++;
    }

    if (lettersCounter < 6 || lettersCounter > 10) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (/^[A-Za-z0-9]*$/.test(pass)){
        isPass = true;
      } else {
        console.log("Password must consist only of letters and digits")
      }


    if (digitCounter < 2) {
        console.log('Password must have at least 2 digits');
    }

    if ((lettersCounter >= 6 && lettersCounter <= 10) && (digitCounter >= 2) && (isPass)) {
        console.log('Password is valid');
    }
}

main('SoftUni40')