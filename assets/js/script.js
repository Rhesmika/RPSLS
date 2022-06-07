document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");


    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play-again"){
            resetScores();
            } else {
            let handType = this.getAttribute("data-type");
            pageLevel(handType);
        }
        }
        );
    }
    document.addEventListener("keydown", function(event){
        if (event.key === "1"){
            let handType = "rock";
            pageLevel(handType);
        } else if (event.key === "2"){
                let handType = "paper";
                pageLevel(handType);
            } else if (event.key === "3"){
                let handType = "scissors";
                pageLevel(handType);
            } else if (event.key === "4"){
                let handType = "lizard";
                pageLevel(handType);
            } else
         if (event.key === "5"){
                let handType = "spock";
                pageLevel(handType);
            };
});
});

var handTypes = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * 
 * sets page level
 */
function pageLevel(handType){
    let level = document.getElementById("level").textContent;
    console.log(level);

    computerHandType(handType , level);
}



/**
 * 
 * sets the computer handtype according to level
 */
function computerHandType(handType , level){
    if (level === "Level 3"){
        var levelHands = handTypes.slice(0, 5);
    } else if (level === "Level 2"){
        var levelHands = handTypes.slice(0, 4);
    } else if (level === "Level 1"){
        var levelHands = handTypes.slice(0, 3);
    }
    console.log(levelHands)
    let random = Math.floor(Math.random()*levelHands.length);
    let handTypeComputer = levelHands[random];

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