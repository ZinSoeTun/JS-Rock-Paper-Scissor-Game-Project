let human = document.querySelector(".human");
let computer = document.querySelector(".computer");
let won = document.querySelector(".won");
let lose = document.querySelector(".lose");
let draw = document.querySelector(".draw");
//function play
function play(x) {
    let choices = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * 3);
    let computerChoice = choices[index];
    let result;
    //determine the result
    if (x == computerChoice) {
        result = "draw";                                     //draw situation
    } else if ((x == "rock" && computerChoice == "scissor") ||
        (x == "paper" && computerChoice == "rock") ||
        (x == "scissor" && computerChoice == "paper")) {
        result = "won";                                      //won situation
    } else {
        result = "lose";                                     //lose situation
    };
    //output chosen
    human.innerHTML = "YOUR CHOICE IS :  " + x.toUpperCase();
    computer.innerHTML = "COMPUTER CHOICE IS  :  " + computerChoice.toUpperCase();
    //output result
    if (result == "draw") {
        draw.classList.remove("hidden");
        won.classList.add("hidden");
        lose.classList.add("hidden");
    } else if (result == "won") {
        draw.classList.add("hidden");
        won.classList.remove("hidden");
        lose.classList.add("hidden");
    } else if (result == "lose") {
        draw.classList.add("hidden");
        won.classList.add("hidden");
        lose.classList.remove("hidden");
    };
}