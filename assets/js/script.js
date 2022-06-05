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

    if (handType === "rock"){
        checkRock(handTypeComputer);
        console.log("user:", handType);
        console.log("computer:" , handTypeComputer);
    } else if (handType === "paper"){
        checkPaper(handTypeComputer);
        console.log("user:", handType);
        console.log("computer:" , handTypeComputer);
    } else if (handType === "scissors"){
        checkScissors(handTypeComputer);
        console.log("user:", handType);
        console.log("computer:" , handTypeComputer);
    } else if (handType === "lizard"){
        checkLizard(handTypeComputer);
        console.log("user:", handType);
        console.log("computer:" , handTypeComputer);
    } else if (handType === "spock"){
        checkSpock(handTypeComputer);
        console.log("user:", handType);
        console.log("computer:" , handTypeComputer);
}
}


/**
 * Calculates if user wins when they play rock
 */
function checkRock(handTypeComputer){
     
    if (handTypeComputer === "rock"){
        let msg = "Both players chose rock...  try again!"
        displayMessage(msg);
    }else if (handTypeComputer === "paper"){
        let msg = "Paper COVERS Rock..  you loose"
        displayMessage(msg);
        incrementGamesLostCount();
    }else if (handTypeComputer === "scissors"){
        let msg = "Rock CRUSHES Scissors! You win!"
        displayMessage(msg);
    }else if (handTypeComputer === "lizard"){
        let msg = "Rock CRUSHES Lizard! You win!"
        displayMessage(msg);
    }else if (handTypeComputer === "spock"){
        let msg = "Spock VAPORISES Rock... you loose"
        displayMessage(msg);
        incrementGamesLostCount();
    }
}

/**
 * Calculates if user wins when they play paper
 */
function checkPaper(handTypeComputer){
        if (handTypeComputer === "rock"){
        let msg = "Paper COVERS Rock!  You win!"
        displayMessage(msg);
    }else if (handTypeComputer === "paper"){
        let msg = "Both players chose paper...  try again!"
        displayMessage(msg);
    }else if (handTypeComputer === "scissors"){
        let msg = "Scissors CUTS Paper... you lose"
        displayMessage(msg);
        incrementGamesLostCount();
    }else if (handTypeComputer === "lizard"){
        let msg = "Lizard EATS Paper... you lose"
        displayMessage(msg);
        incrementGamesLostCount();
    }else if (handTypeComputer === "spock"){
        let msg = "Paper DISPROVES Spock! You win!"
        displayMessage(msg);
    }
}

/**
 * Calculates if user wins when they play scissors
 */
function checkScissors(handTypeComputer){
    if (handTypeComputer === "rock"){
        let msg = "Rock CRUSHES Scissors... you lose"
        displayMessage(msg);
        incrementGamesLostCount();
    }else if (handTypeComputer === "paper"){
        let msg = "Scissors CUTS Paper! You win!"
        displayMessage(msg);
    }else if (handTypeComputer === "scissors"){
        let msg = "Both players chose Scissors...  try again!"
        displayMessage(msg);
    }else if (handTypeComputer === "lizard"){
        let msg = "Scissors DECAPITATES Lizard! You win!"
        displayMessage(msg);
    }else if (handTypeComputer === "spock"){
        let msg = "Spock SMASHES Scissors... you lose"
        displayMessage(msg);
        incrementGamesLostCount();
    }
}

/**
 * Calculates if user wins when they play scissors
 */
function checkLizard(handTypeComputer){
    if (handTypeComputer === "rock"){
        let msg = "Rock CRUSHES Lizard... you lose"
        displayMessage(msg);
        incrementGamesLostCount();
    }else if (handTypeComputer === "paper"){
        let msg = "Lizard EATS Paper! You win!"
        displayMessage(msg);
    }else if (handTypeComputer === "scissors"){
        let msg = "Scissors DECAPITATES Lizard... you lose"
        displayMessage(msg);
        incrementGamesLostCount();
    }else if (handTypeComputer === "lizard"){
        let msg = "Bother players chose Lizard... try again!"
        displayMessage(msg);
    }else if (handTypeComputer === "spock"){
        let msg = "Lizard POISONS Spock! You win!"
        displayMessage(msg);
    }
}

function checkSpock(handTypeComputer){
    if (handTypeComputer === "rock"){
        let msg = ""
        displayMessage(msg);
    }else if (handTypeComputer === "paper"){
        let msg = ""
        displayMessage(msg);
    }else if (handTypeComputer === "scissors"){
        let msg = ""
        displayMessage(msg);
    }else if (handTypeComputer === "lizard"){
        let msg = ""
        displayMessage(msg);
    }else if (handTypeComputer === "spock"){
        let msg = ""
        displayMessage(msg);
    }
    incrementGamesLostCount();

}



function displayMessage(msg){
    document.getElementById("msg").textContent = msg;
}

function incrementGamesLostCount(){}

function displayGamesLostCount(){}

function resetScore(){

}