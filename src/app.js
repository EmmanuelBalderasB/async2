const songs = require('../modules/main.js');

let arr = [];
while  (arr.length <  5) {
    arr.push(songs.getSong('content'));
}
console.log(arr);