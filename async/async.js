const songs = require('../modules/main.js')
async function chain() {
    let onResolve = await songs.getSong('upbeat')
}