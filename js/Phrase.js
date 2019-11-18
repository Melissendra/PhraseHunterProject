/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /* Display phrase on the game board */
    addPhraseToDisplay(){
        const phrase = this.phrase;
        const $list = $("#phrase ul");
        for( let i = 0; i < phrase.length; i++){
            const letters = phrase.charAt(i);
            letters === ' ' ?  $list.append("<li class= 'space'> </li>") : $list.append(`<li class = "hide letter ${letters}"> ${letters} </li>`)
        }
    }

    /*
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter){
        return this.phrase.match(letter) !== null;
    }

    showMatchLetter(letter){
        const $matchedLetters = $(`.${letter}`);
        $matchedLetters.removeClass("hide").addClass("show");

    }
}