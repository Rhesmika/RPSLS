console.log("hello");

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play-again"){
            resetScore();
            runGame();
        } else {
            let handType = this.getAttribute("data-type");
            alert (`You picked ${handType}`);
            console.log("user:" , handType);
        }
        runGame();
        })
        
    }
})


/**
 * Set hand type for computer randomly
 */
function runGame(){

    let handTypes = ["rock", "paper", "scissors", "lizard", "spock"];
    let random = Math.floor(Math.random()*handTypes.length);
    let handTypeComputer = handTypes[random];
    console.log("computer:" , handTypeComputer);
    calculateWinner();
}

function calculateWinner(){
    

}

function displayMessage(){}

function incrementGamesLostCount(){}

function displayGamesLostCount(){}

function resetScore(){

}