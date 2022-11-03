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
}

insertMoods();

const inputE = document.getElementById('input');
const input = inputE.value;
const button = document.getElementById('submit');
const container = document.getElementById('container');
const resetBttn = document.getElementById('reset');
const form = document.getElementById('form');
let artistName = '';

const format = (inp) => {
  try {
    let genre =  songs.getGenre(inp);
    let song  =  songs.getSong(genre);
    let lyrics =  songs.getLyrics(song);
    let artist =  songs.getArtist(genre,song);
    artistName = artist;
    let embed = songs.getEmbedded(song);
    let success =  songs.onSuccess(song, lyrics, artist, embed);
    return success;
  } catch(error) {
    console.log(error);
  }
}

const display = (event) => {
  event.preventDefault();
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
  const result = format(input);
  container.innerHTML = `<pre id="result">${result}
                          <img id="${artistName}" src="../assets/${artistName}.jpg">
                        </pre>`;
}

const reset = (event) => {
  event.preventDefault();
  //form.reset();
  container.innerHTML = "";
  inputE.value = ""
}

document.querySelector('#moods').addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    inputE.value = e.target.textContent;
  }
});

button.addEventListener('click', display);

resetBttn.addEventListener('click', reset)