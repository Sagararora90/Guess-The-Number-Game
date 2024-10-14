let randomnumber = Math.floor(Math.random()*100)+1;
let attempts =0;
let Maxattempts=10;
let guesses = [];
let guessinput = document.getElementById("guess-input");
let submitbtn = document.getElementById("submit-btn");
let resulttext = document.getElementById("result");
let attemptstext = document.getElementById("attempts");
let previousguessestext = document.getElementById("previous-guesses");
let restartbtn = document.getElementById("restart-btn");


guessinput.addEventListener("keydown",function(e){
           if(e.key ==="Enter"){
            if(guessinput.value.trim() === ""){
                window.alert(`Please Enter Any Number`)
                }
                else{
                    submitguess();
                }
           }
          
});

submitbtn.addEventListener("click",submitguess)

function submitguess(){
    const userguess = parseInt(guessinput.value);

    if(!isNaN(userguess) && userguess >=1 && userguess <= 100){
        attempts++;
        guesses.push(userguess);
        updatepreviousguesses();
        const difference = Math.abs(userguess - randomnumber);
        if(userguess === randomnumber){
            resulttext.textContent =  `Congratulations! You guessed the correct number (${randomnumber})!`;
            resulttext.style.color = "#27ae60";
            endgame();
        }
        else if(attempts >= Maxattempts){
            resulttext.textContent = `You've used all 10 attempts! The correct number was ${randomnumber}.`;
            resulttext.style.color ="#e74c3c";
            endgame();
        }
        else{
            if(difference <=10){
                if(userguess > randomnumber ){
                    resulttext.textContent = `Your guess of ${userguess} is almost there, but it's a little high!`;
                }
                else{
                    resulttext.textContent = `Your guess of ${userguess} is almost there, but it's a little low!`;
                }
                resulttext.style.color = "#2980b9";
            }
            else if(difference <= 50){
                if(userguess > randomnumber ){
                    resulttext.textContent = `Your guess of ${userguess} is too high!`;
                }
                else{
                    resulttext.textContent = `Your guess of ${userguess} is too low!`;
                }
                resulttext.style.color = "#f39c12";
            }
            else {
                if(userguess > randomnumber ){
                    resulttext.textContent = `Your guess of ${userguess} is way too high!`;
                }
                else{
                    resulttext.textContent = `Your guess of ${userguess} is way too low!`;
                }
                resulttext.style.color = "#c0392b";
            }
        }
        attemptstext.textContent = `Attempts:${attempts}/${Maxattempts}`;
    }
    else {
        resulttext.textContent = "Please enter a valid number between 1 and 100.";
        resulttext.style.color = "#e74c3c";
    }
    guessinput.value = "";
}

function updatepreviousguesses(){
    previousguessestext.textContent = "Previous Guess:" + guesses.join(", ")
}

function endgame(){
    submitbtn.disabled = true;
    guessinput.disabled = true;
    restartbtn.style.display = "block";
}

restartbtn.addEventListener("click", function() {
    randomnumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guesses = [];
    resulttext.textContent = "";
    attemptstext.textContent = "";
    previousguessestext.textContent = "Previous guesses: ";
    guessinput.value = "";
    guessinput.disabled = false;
    submitbtn.disabled = false;
    restartbtn.style.display = "none";
});
document.addEventListener("keydown", function(e) {
    if (e.key === " ") {
      restartGame();
    }
  });
  
  function restartGame() {
    randomnumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guesses = [];
    resulttext.textContent = "";
    attemptstext.textContent = "";
    previousguessestext.textContent = "Previous guesses: ";
    guessinput.value = "";
    guessinput.disabled = false;
    submitbtn.disabled = false;
    restartbtn.style.display = "none";
  }


 

