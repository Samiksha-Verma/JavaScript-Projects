let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
//const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock, paper, scissors
};

const drawGame = () =>{
   msg.innerText = "Game was Draw. Play again/";
   document.getElementById("msg").style.backgroundColor = "#646F4B";
};

const showWinner = (userwin) =>{
   if(userwin === true){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText="you win!";
    document.getElementById("msg").style.backgroundColor = "green";
   
   }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText="you lose!";
    document.getElementById("msg").style.backgroundColor = "red";
   }
}

const playGame = (userChoice) => {
    //Generate computer choice 
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userwin = true;
        //scissors,paper
         if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
         }else if(userChoice === "paper"){
           userwin = compChoice === "scissors" ? false : true;
         }else{
            userwin = compChoice === "rock" ? false : true;
         }
         showWinner(userwin);
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});