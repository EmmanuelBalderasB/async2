const songs = require('../modules/main.js');
const assert = require("assert");

describe('songs', () => {
    describe('getGenre', () => {
        it ('returns a genre based from a predetermined list of inputs', () => {
            //SETUP
            const i = 'content';
            const expected = {
                ModernBaseball: ['Charlie Black','The Weekend'],
                TitleFight: ['Where Am I?','Rose Of Sharon'],
                Turnover: ['Sunshine Type','Super Natural']
            }
            //EXERCISE
            const actual = songs.getGenre(i)
            //EXECUTION
            assert.deepEqual(actual, expected);
        })
        it ('throws an error if the given input is not in the provided list', () => {
            //SETUP

            //EXERCISE

            //EXECUTION
        })
    })
})