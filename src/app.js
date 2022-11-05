import songs from '../modules/main.js';
const moods = songs.moods;

const ul = document.getElementById('moods');

const insertMoods = () => {
    try {
        ul.innerHTML = moods.map(item => {
            return `<li class="li" id="${item}">${item}</li>`;
        }).join('')
    } catch(error) {
        //console.log(error);
    }
};

insertMoods();

const button = document.getElementById('submit');
const container = document.getElementById('container');
const resetBttn = document.getElementById('reset');
const form = document.getElementById('form');
let artistName = '';

/*const format = (inp) => {
  try {
    let genre =  songs.getGenre(inp);
    let song  =  songs.getSong(genre);
    let lyrics =  songs.getLyrics(song);
    let artist =  songs.getArtist(genre,song);
    artistName = artist;
    let success =  songs.onSuccess(song, lyrics, artist);
    return success;
  } catch(error) {
    console.log(error);
  }
}*/

const inputE = document.getElementById('input');
const input = inputE.value;

const display = async(event) => {
  event.preventDefault();
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
  let genre =  songs.getGenre(input);
  let song  =  songs.getSong(genre);
  let lyrics = songs.getLyrics(song);
  let artist = songs.getArtist(genre,song);
  artistName = artist;
  let result = songs.onSuccess(song, lyrics, artist);
  container.innerHTML = `<pre id="result">${result}
                          <img id="${artistName}" src="../assets/${artistName}.jpg">
                        </pre>`;
};

const reset = (event) => {
  try{
    event.preventDefault();
    //form.reset();
    container.innerHTML = "";
    inputE.value = "";
  }catch(error) {
    console.log(error);
  }
}

/*document.querySelector('#moods').addEventListener('mouseover', (e) => {
  if (e.target.matches('li')) {
    inputE.value = e.target.innerHTML;
  }
});*/

document.querySelector('#moods').addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    inputE.value = e.target.innerHTML;
  }
});

button.addEventListener('click', display);

resetBttn.addEventListener('click', reset);