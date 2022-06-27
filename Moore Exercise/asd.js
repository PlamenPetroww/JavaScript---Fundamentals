function asd(arr) {

    let asd = []
    for(let i = 0; i < arr.length; i++) {
        asd.push(arr[i])
    }
    asd.splice(0,0, 'addw')
    console.log(asd)

}

asd(['ant', 'bison', 'camel', 'duck', 'elephant'])