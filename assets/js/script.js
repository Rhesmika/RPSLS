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
            }
        });
        
    }
});

let handTypes = ["rock", "paper", "scissors", "lizard", "spock"];


function runGame(handType){

    let random = Math.floor(Math.random()*handTypes.length);
    let handTypeComputer = handTypes[random];

    if (handType === handTypes[0]){
        checkRock(handTypeComputer);
        console.log("user:", handType);
        console.log("computer:" , handTypeComputer);
    } else if (handType === handTypes[1]){
        checkPaper();
        console.log("user:", handType);
        console.log("computer:" , handTypeComputer);
    } else if (handType === handTypes[2]){
        checkScissors();
        console.log("user:", handType);
        console.log("computer:" , handTypeComputer);
    } else if (handType === handTypes[3]){
        checkLizard();
        console.log("user:", handType);
        console.log("computer:" , handTypeComputer);
    } else if (handType === handTypes[4]){
        checkSpock();
        console.log("user:", handType);
        console.log("computer:" , handTypeComputer);
}
}



function checkRock(handTypeComputer){
     

    if (handTypeComputer === "rock"){
        let msg = "Both players chose rock...  try again!"
        displayMessage(msg);
    }else if (handTypeComputer === "paper"){
        let msg = "Paper covers Rock..  you loose"
        displayMessage(msg);
        incrementGamesLostCount();
    }else if (handTypeComputer === "scissors"){
        let msg = "Rock crushes Scissors! You win!"
        displayMessage(msg);
    }else if (handTypeComputer === "lizard"){
        let msg = "Rock crushes Lizard! You win!"
        displayMessage(msg);
    }else if (handTypeComputer === "spock"){
        let msg = "Spock vaporises Rock... you loose"
        displayMessage(msg);
        incrementGamesLostCount();
}
}


function checkPaper(){}
function checkScissors(){}
function checkLizard(){}
function checkSpock(){}



function displayMessage(msg){
    document.getElementById("msg").textContent = msg;
}

function incrementGamesLostCount(){}

function displayGamesLostCount(){}

function resetScore(){

}