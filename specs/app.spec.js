const songs = require('../modules/main.js');
const assert = require("assert");
const chai = require("chai");
const ex = chai.expect;

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
            const i = 'happy';
            const expected = Error('Please input a mood from the provided list');
            //EXERCISE
            const exercise = () => {    songs.getGenre(i)   };
            //EXECUTION
           assert.throws(exercise, /Please input a mood from the provided list/)
        })
    })
})