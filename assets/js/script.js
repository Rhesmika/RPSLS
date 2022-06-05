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
            runGame(handType);
            handTypeComputer();
            }
        });
        
    }
});

let handTypes = ["rock", "paper", "scissors", "lizard", "spock"];


function runGame(handType){
    if (handType === handTypes[0]){
        checkRock();
    } else if (handType === handTypes[1]){
        checkPaper();
    } else if (handType === handTypes[2]){
        checkScissors();
    } else if (handType === handTypes[3]){
        checkLizard();
    } else if (handType === handTypes[4]){
        checkSpock();
}
}

/**
 * Set hand type for computer randomly
 */
function handTypeComputer(){

    let handTypes = ["rock", "paper", "scissors", "lizard", "spock"];
    let random = Math.floor(Math.random()*handTypes.length);
    let handTypeComputer = handTypes[random];
    console.log("computer:" , handTypeComputer);
}





function calculateWinner(){
    

}

function displayMessage(){}

function incrementGamesLostCount(){}

function displayGamesLostCount(){}

function resetScore(){

}