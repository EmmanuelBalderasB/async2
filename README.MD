Codecademy Mixed Messages Project
=================================
My mixed messages app, I included a little bit more code than the project originally demanded. It includes a testing suite using mocha and chai, and separation of concerns. 

ABOUT
-----
This app takes in an input (mood) of a given from a predetermined set of values, and returns a random song from one of my favorite indie/rock/emo artists and a short snippet of the song's lyrics.
It returns a string in the following format: `You wanted {mood you inputed} music. Your song is {random song} by {random song's artist}. Some lyrics {small fragment};`

Its songs catalogue is limited for now because the process of filling the data for each song is really tedious, but I plan to eventually add more.

HOW TO
------
I added a loop to run the program x number of times to get a few different results, push it into an array and return it. Just run on your terminal:
```
node src/app.js
```
If you want to input your own mood (as long as it is in the provided array), I commented out a second function called "chain2" inside `./src/app.js` where you can uncomment it and enter your mood on the function's parameter. It looks like it this:
```
console.log(chain2('your input here'));
```
Mood array:
```
['upbeat','emotional','melancholic','hopeful','content','sad','anxious','angsty']
```

But why?
--------
I had initially ~~skipped~~ forgot to do these challenge, so now i'm further down the Fullstack path I wanted to give this a shot. It is also a goodway for people to discover some great tunes! I encourage to check them out! I might add also a new feature where you get a link to each song outputted ~~soon~~ sometime.
Feel free to comment/discuss or roast my janky code ha!