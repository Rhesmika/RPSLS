console.log("hello");

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");


    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play-again"){
            resetScores();
            } else {
            let handType = this.getAttribute("data-type");
            computerHandType(handType);
            }
        }
        );
    }
    document.addEventListener("keydown", function(event){
        if (event.key === "1"){
            let handType = "rock";
            computerHandType(handType);
        } else if (event.key === "2"){
                let handType = "paper";
                computerHandType(handType);
            } else if (event.key === "3"){
                let handType = "scissors";
                computerHandType(handType);
            } else if (event.key === "4"){
                let handType = "lizard";
                computerHandType(handType);
            } else
         if (event.key === "5"){
                let handType = "spock";
                computerHandType(handType);
            };
});
});

function pageLevel(){

}
var handTypes = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * 
 * sets the computer handtype
 */
function computerHandType(handType){
    
    let random = Math.floor(Math.random()*handTypes.length);
    let handTypeComputer = handTypes[random];


    runGame(handType , handTypeComputer);

}




/**
 * 
 * run game according to user hand type
 */

function runGame(handType , handTypeComputer){
    
    if (handType === "rock"){
        checkRock(handTypeComputer);
    } else if (handType === "paper"){
        checkPaper(handTypeComputer);
    } else if (handType === "scissors"){
        checkScissors(handTypeComputer);
    } else if (handType === "lizard"){
        checkLizard(handTypeComputer);
    } else if (handType === "spock"){
        checkSpock(handTypeComputer);
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
        incrementGameWonCount();
    }else if (handTypeComputer === "lizard"){
        let msg = "Rock CRUSHES Lizard! You win!"
        displayMessage(msg);
        incrementGameWonCount();
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
        incrementGameWonCount();
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
        incrementGameWonCount();
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
        incrementGameWonCount();
    }else if (handTypeComputer === "scissors"){
        let msg = "Both players chose Scissors...  try again!"
        displayMessage(msg);
    }else if (handTypeComputer === "lizard"){
        let msg = "Scissors DECAPITATES Lizard! You win!"
        displayMessage(msg);
        incrementGameWonCount();
    }else if (handTypeComputer === "spock"){
        let msg = "Spock SMASHES Scissors... you lose"
        displayMessage(msg);
        incrementGamesLostCount();
    }
}

/**
 * Calculates if user wins when they play lizard
 */
function checkLizard(handTypeComputer){
    if (handTypeComputer === "rock"){
        let msg = "Rock CRUSHES Lizard... you lose"
        displayMessage(msg);
        incrementGamesLostCount();
    }else if (handTypeComputer === "paper"){
        let msg = "Lizard EATS Paper! You win!"
        displayMessage(msg);
        incrementGameWonCount();
    }else if (handTypeComputer === "scissors"){
        let msg = "Scissors DECAPITATES Lizard... you lose"
        displayMessage(msg);
        incrementGamesLostCount();
    }else if (handTypeComputer === "lizard"){
        let msg = "Both players chose Lizard... try again!"
        displayMessage(msg);
    }else if (handTypeComputer === "spock"){
        let msg = "Lizard POISONS Spock! You win!"
        displayMessage(msg);
        incrementGameWonCount();
    }
}

/**
 * Calculates if user wins when they play spock
 */
function checkSpock(handTypeComputer){
    if (handTypeComputer === "rock"){
        let msg = "Spock VAPORISES Rock! You win!"
        displayMessage(msg);
        incrementGameWonCount();
    }else if (handTypeComputer === "paper"){
        let msg = "Paper DISPORVES Spock... you lose"
        displayMessage(msg);
        incrementGamesLostCount();
    }else if (handTypeComputer === "scissors"){
        let msg = "Spock SMASHES Scissors! You win!"
        displayMessage(msg);
        incrementGameWonCount();
    }else if (handTypeComputer === "lizard"){
        let msg = "Lizard POISONS Spock... you lose"
        displayMessage(msg);
        incrementGamesLostCount();
    }else if (handTypeComputer === "spock"){
        let msg = "Both players chose Spock.. try again!"
        displayMessage(msg);
    }
}


/**
 * Displays the reponse message of who won
*/
function displayMessage(msg){
    document.getElementById("msg").textContent = msg;
}


/**
 * Increase games lost score
 */
function incrementGamesLostCount(){
    let LostScore = document.getElementById("game-lost-count").innerText;
    let newLostScore = ++LostScore;
    document.getElementById("game-lost-count").innerText = newLostScore;

    if (newLostScore === 3){
        resetScores(newLostScore);
    }
}

function incrementGameWonCount(){
    let wonScore = document.getElementById("game-won-count").innerText;
    let newWonScore = ++wonScore;
    document.getElementById("game-won-count").innerText = newWonScore;
}




/**
 * Resets INCORRECTScore to 0 
*/
function resetScores(newLostScore , newWonScore){
    alert("you're dead");
    lostScore = 0;
    wonScore = 0;
    document.getElementById("game-lost-count").innerText = lostScore;
    document.getElementById("game-won-count").innerText = wonScore;
    computerHandType()
}