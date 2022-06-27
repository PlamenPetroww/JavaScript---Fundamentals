function asd() {

    let array = asd.split('');
    let digitCount = 0;

    for(let i = 0; i < array.length; i++) {
        let num = array[i].charCodeAt();
            digitCount++;
        }

        if(digitCount < 2) {
            console.log('False')
        } else {
            console.log('true')
        }
    }



asd('223')