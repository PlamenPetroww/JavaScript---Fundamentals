function gramophone(group, album, song) {


    for(let i = 0 ; i < album.length; i++) {
        let time = (group.length * album.length) * song.length / 2
        let rotations = Math.ceil(time / 2.5);
        console.log(`The plate was rotated ${rotations} times.`)
        break;
    }

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')