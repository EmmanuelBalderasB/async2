const songs = require('../modules/main.js');
const assert = require("assert");
const chai = require("chai");
const ex = chai.expect;

describe('songs', () => {
    describe('getGenre', () => {
        it('returns a genre based from a predetermined list of inputs', () => {
            //SETUP
            const i = 'content';
            const expected = {
                ModernBaseball: ['Charlie Black', 'The Weekend'],
                TitleFight: ['Where Am I?', 'Rose Of Sharon'],
                Turnover: ['Sunshine Type', 'Super Natural']
            }
            //EXERCISE
            const actual = songs.getGenre(i);
            //EXECUTION
            assert.deepEqual(actual, expected);
        });
        it('throws an error if the given input is not in the provided list', () => {
            //SETUP
            const i = 'happy';
            //EXERCISE
            const exercise = () => { songs.getGenre(i) };
            //EXECUTION
            assert.throws(exercise, /Please input a mood from the provided list/);
        });
    });
    describe('getSong', () => {
        it('returns a random song from a random artist from the selected genre', () => {
            //SETUP
            const i = 'content'
            
            const expected = [
                'Charlie Black', 'The Weekend',
                'Where Am I?', 'Rose Of Sharon',
                'Sunshine Type', 'Super Natural'
            ]
            //EXERCISE
            const exercise = songs.getSong(i);
            //EXECUTION
            //NOT FIXED
            ex(expected).to.include(songs.getSong(i));
        });
    });
});