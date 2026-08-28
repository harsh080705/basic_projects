let compscore=0;
let userscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelectorAll("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const getcompchoice = () => {
    const options = ["rock","paper","scissor"]
    const randindx=Math.floor(Math.random() * 3);
    return options[randindx];
}

const drawgame = () => {
    console.log("game was drawn");
    msg.innertext="game was drawn";
}

const showwinner = (userWin) => {
    if(userWin){
        userscore++;
        userscorepara.innertext=userscore;
        console.log("you win");
        msg.innertext="you win";
    }else{
        compscore++;
        compscorepara.innertext=compscore
        console.log("you lose");
        msg.innertext="you lose";
    }
}

const playgame = (userchoice) => {
    console.log("user selected",userchoice);
    const compchoice=getcompchoice();
    console.log("comp selected",compchoice);
    if(compchoice === userchoice){
        drawgame();
    }else{
       let userWin = true;
       if(userchoice === "rock"){
            userWin = compchoice === "paper" ? false : true;
       }else if(userchoice === "paper"){
            userWin = compchoice === "scissor" ? false : true;
       }else{
            userWin = compchoice === "rock" ? false : true;
       }
       showwinner(userWin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
