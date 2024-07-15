let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "gray";
}

const showwinner = (userwin, userchoice, compChoice) => {
    if (userwin) {
        msg.innerText = `You win! ${userchoice} beats ${compChoice}`;
        userScore++;
        userscore.innerText = userScore;
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = `You lose! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compscore.innerText = compScore;
    }
}

const gencomputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * options.length);
    return options[randidx];
};

const playgame = (userchoice) => {
    const compChoice = gencomputerChoice();

    if (userchoice === compChoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compChoice === "scissors";
        } else if (userchoice === "paper") {
            userwin = compChoice === "rock";
        } else {
            userwin = compChoice === "paper";
        }
        showwinner(userwin, userchoice, compChoice);
    }
};

const handleChoice = (choice) => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => handleChoice(choice));
    choice.addEventListener("touchstart", () => handleChoice(choice));
});
