const songs = require('../modules/main.js');

const chain = () => {
   let genre =  songs.getGenre('upbeat');
   let song  =  songs.getSong(genre);
   let lyrics =  songs.getLyrics(song);
   let artist =  songs.getArtist(genre,song);
   let success =  songs.onSuccess(genre, song, lyrics, artist);
   console.log(success);
}

chain();