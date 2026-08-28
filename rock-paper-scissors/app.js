let compscore = 0;
let userscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const getcompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randindx = Math.floor(Math.random() * 3);
    return options[randindx];
};

const drawgame = () => {
    console.log("Game was drawn");
    msg.innerText = "Game was drawn! Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You win");
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You lose");
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("User selected:", userchoice);
    const compchoice = getcompchoice();
    console.log("Comp selected:", compchoice);
    
    if (compchoice === userchoice) {
        drawgame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compchoice === "scissor" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        showwinner(userWin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
