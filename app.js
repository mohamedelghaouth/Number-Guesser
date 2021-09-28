const form = document.querySelector("#form");
const guess = document.querySelector("#guess");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const message = document.querySelector("#message");
const submitbtn = document.querySelector("#submitbtn");




let randomNmb, tries = 3, gameOver = false;

form.addEventListener("submit", evaluate);
min.addEventListener("change", reinitlize);
max.addEventListener("change", reinitlize);


function evaluate(e){
    let numGuess = parseFloat(guess.value);
    let numMin = parseFloat(min.value);
    let numMax = parseFloat(max.value);
    if(gameOver){
        location.reload();
    }
    if(isNaN(numMin) || isNaN(numMax)){
        alert("You must specifie min and max, then guess");
    }else{
        if(isNaN(numGuess)){
            alert("You must guess")
        } else if(numGuess !== randomNmb){
            tries -= 1;
            if(message.firstChild){
                message.removeChild(message.firstChild);
            }
            message.style.color = 'red';
            if(tries !== 0){
                message.appendChild(document.createTextNode(`Incorrect, you have ${tries} more`));
            } else{
                guess.style.borderColor = 'red';
                message.appendChild(document.createTextNode(`Game Over, you lost, the number is ${randomNmb}`));
                submitbtn.value = "Play again";
                gameOver = true;
            }
        } else {
            if(message.firstChild){
                message.removeChild(message.firstChild);
            }
            guess.style.borderColor = 'green';
            message.style.color = 'green';
            message.appendChild(document.createTextNode(`You Won, ${numGuess} is the Number`));
            submitbtn.value = "Play again";
            gameOver = true;
        }
    }
    e.preventDefault();
}

function reinitlize(e){
    let numMin = parseFloat(min.value);
    let numMax = parseFloat(max.value);
    randomNmb = Math.floor(Math.random() * (numMax - numMin) + numMin); 
    tries = 3;
    guess.value = '';
    
}