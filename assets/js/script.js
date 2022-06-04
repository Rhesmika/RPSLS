console.log("hello");

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play-again"){
            runGame();
        } else {
            let handType = this.getAttribute("datatype");
            alert (`You picked ${handType}`);
            console.log("hand type")
        }
        })
    }
})
function runGame(){
    console.log("run Game");
}

function checkAnswer(){}

function calculateWinner(){}

function displayMessage(){}

function incrementGamesLostCount(){}

function displayGamesLostCount(){}