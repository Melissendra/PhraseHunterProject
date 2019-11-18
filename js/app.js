/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const $button = $("#btn__reset");
const $keyboardBtn = $("#qwerty button");
let game;

$button.on("click", () =>{
   game = new Game();
   game.startGame();
});

$keyboardBtn.on("click", function(e){
   game.handleInteraction(e);
});


