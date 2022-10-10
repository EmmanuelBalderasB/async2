const songs = require('../modules/main.js');

let arr = [];
while  (arr.length <  5) {
    arr.push(songs.getSong('upbeat'));
}
console.log(arr);