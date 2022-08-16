function songs(input) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        printSongName() {
            console.log(this.name);
        }
    }

    let numbersOfSongs = input.shift();
    let typeList = input.pop();

    for (let i = 0; i < numbersOfSongs; i++) {
        let [type, name, time] = input[i].split('_');
        const song = new Song(type, name, time);
        if (type == typeList || typeList == "all") {
            song.printSongName();
        }
    }
}

/* songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']) */

    songs([2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all'])