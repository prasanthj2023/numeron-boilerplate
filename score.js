// Iteration 5: Store the player score and display it on the game over screen

var total = localStorage.getItem("score");

var scoreboard = document.getElementById("score-board")
scoreboard.innerHTML = total

document.getElementById("play-again-button").addEventListener("click", function (){
    window.location.href="./game.html";
})