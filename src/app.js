const songs = require('../modules/main.js');
const moods = songs.moods;

let arr = []

const chain = () => {
    for (let i = 0; i < moods.length; i++) {
        let genre =  songs.getGenre(moods[i]);
        let song  =  songs.getSong(genre);
        let lyrics =  songs.getLyrics(song);
        let artist =  songs.getArtist(genre,song);
        let success =  songs.onSuccess(song, lyrics, artist);
        arr.push(success);
        //console.log(genre);
    }
}

chain();
console.log(arr);

/*const chain2 = (inp) => {
    
        let genre =  songs.getGenre(inp);
        let song  =  songs.getSong(genre);
        let lyrics =  songs.getLyrics(song);
        let artist =  songs.getArtist(genre,song);
        let success =  songs.onSuccess(song, lyrics, artist);
        return success;
        //console.log(genre);
    
}

console.log(chain2('your input here'));*/