/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

/**
 * Creates phrases for use in game
 * @return {array} An array of phrases that could be used in the game
 * */
    createPhrases(){
        const phrases = [
            new Phrase("Carpe Diem"),
            new Phrase("Treat others like you'd like to be treated"),
            new Phrase("We often need a smaller one than ourselves"),
            new Phrase("The eyes are the soul's mirror"),
            new Phrase("Never say never")
        ];
        return phrases;
    }

/**
 * Selects random phrase from phrases property
 * @return {object} Phrase object chosen to be used
 * */
    getRandomPhrase(){
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    }
}