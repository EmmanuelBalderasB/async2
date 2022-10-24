import songs from '../modules/main.js';

const moods = songs.moods;

const ul = document.getElementById('moods');

const insertMoods = () => {
    try {
        ul.innerHTML = moods.map(item => {
            return `<li class="li">${item}</li>`;
        })
    } catch(error) {
        //console.log(error);
    }
}

insertMoods();

const inputE = document.getElementById('input');
const input = inputE.value;
const button = document.getElementById('submit');
const container = document.getElementById('container');

const format = (inp) => {
  try {
    let genre =  songs.getGenre(inp);
    let song  =  songs.getSong(genre);
    let lyrics =  songs.getLyrics(song);
    let artist =  songs.getArtist(genre,song);
    let success =  songs.onSuccess(song, lyrics, artist);

    //return success;
    //console.log(genre);
    return 'hello world'//success;
  } catch(error) {
    console.log(error);
  }
}

button.addEventListener("click", function() {
  const result = format(input);
  container.innerHTML = result;
  console.log('hello world')
});


/*const chain = () => {
    for (let i = 0; i < moods.length; i++) {
        let genre = songs.getGenre(moods[i]);
        let song  =  songs.getSong(genre);
        let lyrics =  songs.getLyrics(song);
        let artist =  songs.getArtist(genre,song);
        let success =  songs.onSuccess(song, lyrics, artist);
        arr.push(success);
        //console.log(genre);
    }
}

chain();*/
