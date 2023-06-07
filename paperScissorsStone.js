//Create a function to get computer choice (paper, scissors or stone)
    //create a random result using mathnumber?

const options = ["rock", "paper", "scissors"]

function compDecision (){
    let choice = Math.floor(Math.random() * 3);
if (choice === 0) {
    return "rock";
}
else if (choice === 1) {
    return "paper";
}

else {
    return "scissors";
}};
let computer = compDecision();
console.log(computer);

//create an input for the player
    //correct for case sensitve issues


function playerDecision() {
    let input = false;
    while (input == false) {
        const userInput = prompt("Choose rock, paper or scissors: "); 
        if(userInput == null) {
            continue;
        }
    inputLowerCase = userInput.toLowerCase();
    if (options.includes(inputLowerCase)){
        input = true;
        return inputLowerCase;
        }
    }
}
let player = playerDecision();

//Compare the two and declare a winner/loser or tie 



function chooseWinner (x, y) {
    let compDecision = x;
    let playerDecision = y;
    if (compDecision === playerDecision) {
        return "It is a tie!"
    }
    else if (compDecision === "rock" && playerDecision === "paper") {
        return "playerwin"
    }
    else if (compDecision === "paper" && playerDecision === "rock") {
        return "computerwin"
    }
    else if (compDecision === "paper" && playerDecision === "scissors") {
        return "playerwin"
    }
    else if (compDecision === "scissors" && playerDecision === "paper") {
        return "computerwin"
    }
    else if (compDecision === "rock" && playerDecision === "scissors") {
        return "computerwin"
    }
    else if (compDecision === "scissors" && playerDecision === "rock") {
        return "playerwin"
    }
}

function playRound() {
let result = chooseWinner(compDecision (), playerDecision());
if (result === "playerwin") {
    console.log( `You win! ${playerDecision()} beats ${compDecision()}`);
}
else if (result === "computerwin") {
    console.log( `You lose! ${compDecision()} beats ${playerDecision()}`);
}
}



//create a game loop function that plays five rounds and records the winner
function game() {
    let userScore = 0;
    let compScore = 0;

    


        playRound();
        console.log("Computer: " + compScore );
        console.log("Player: " + userScore);
        if (chooseWinner(compDecision (), playerDecision()) === "playerwin"){
             userScore++;

        }
        else if (chooseWinner(compDecision (), playerDecision()) === "computerwin"){
             compScore++;
        }
        playRound();
        console.log("Computer: " + compScore );
        console.log("Player: " + userScore);
        if (chooseWinner(compDecision (), playerDecision()) === "playerwin"){
             userScore++;

        }
        else if (chooseWinner(compDecision (), playerDecision()) === "computerwin"){
             compScore++;
        }
    
    if (userScore < compScore ){
        console.log("Computer wins " + compScore + ":" + userScore);
    }
    else if (userScore > compScore) {
        console.log("Player wins " + userScore + ":" + compScore );
    }
    else {
        console.log("Tied game");
    }
    console.log("Well played");

}
game();
