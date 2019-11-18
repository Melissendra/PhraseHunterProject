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
        return [
            new Phrase("Carpe Diem"),
            new Phrase("Treat others like you would like to be treated"),
            new Phrase("We often need a smaller one than ourselves"),
            new Phrase("The eyes are the mirror of the soul"),
            new Phrase("Never say never")
        ];
    }

    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used
     * */
    getRandomPhrase(){
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    }

    /**
     * begins game by selecting a random phrase and displaying it to the user
     **/
    startGame(){
        const $overlayDiv = $("#overlay");
        $overlayDiv.hide();
        const random = this.getRandomPhrase();
        random.addPhraseToDisplay();
        this.activePhrase = random;
    }


    /*
    * check for winning move
    * @return {boolean} True if game has bern won, false if the game wasn't won
    */
    checkForWin(){
        const $hiddenLetters = $(".hide");
        return $hiddenLetters.length === 0;
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    **/
    removeLife(){
        $("img")[this.missed].src = "images/lostHeart.png";
        this.missed++;
        if(this.missed === 5){
            this.gameOver(false);
        }

    }

    /**
     * Display Game Over message
     */
    gameOver(){
        const $overlay = $("#overlay");
        const $endSentence = $("#game-over-message");
        $overlay.removeClass("start");
        $overlay.show();
        if(this.checkForWin()){
            $endSentence.text ("You win!!!");
            $overlay.addClass("win");

        }else{
            $endSentence.text("You Lose! Try again!");
            $overlay.addClass("lose");
        }
        this.restartGame()
    }

    handleInteraction(e){
        const target = $(e.target);
        const $letter = target.text();
        const $currentPhrase = this.activePhrase;
        target.prop("disabled", true);
        if($currentPhrase.checkLetter($letter)){
            $currentPhrase.showMatchLetter($letter);
            target.addClass("chosen");
            if(this.checkForWin()){
                this.gameOver();
            }
        }else{
            target.addClass("wrong");
            this.removeLife();
        }
    }

    restartGame(){
        $("#phrase ul").empty();
        $("#qwerty button").removeClass("chosen wrong");
        $("#qwerty button").prop("disabled", false);
        $("img [src='images/lostHeart.png']").each(function(){
            $("img").src = "images/liveHeart.png"
        });
    }
}