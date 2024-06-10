let choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let user=document.querySelector("#user");
let computer=document.querySelector("#computer");
let resetbtn=document.querySelector("#resetbtn");
let userScore = 0;
let compScore = 0;
const computerChoice = () => {
    const array = ["rock", "paper", "scissor"];
    let randomNum = Math.floor(Math.random() * 3);
    return array[randomNum];
}
const draw = () => {
    msg.innerHTML = "Game was draw.Play again";
    msg.style.backgroundColor="black";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        msg.innerText=`You win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        user.innerText=userScore;
    }
    else{
        compScore++;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        computer.innerText=compScore;
    }
}
const playgame = (userChoice) => {
    const compChoice = computerChoice();
    if (userChoice === compChoice) {
        draw();
    }
    else{
        userWin = true;
     if (userChoice === "rock") {
        userWin=compChoice === "paper"? false : true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice === "scissor"? false : true;
    }
    else{
        userWin=compChoice === "rock"? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
});
//function to reset game

resetbtn.addEventListener("click",()=>{
        userScore = 0;
        compScore=0;
        msg.style.backgroundColor="black"
        msg.innerHTML="Start Again";
        user.innerText=userScore;
        computer.innerText=compScore;
    });
