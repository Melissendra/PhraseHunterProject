/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const $button = $("#btn__reset");
let game;

$button.on("click", () =>{
   game = new Game();
   game.startGame();
});



