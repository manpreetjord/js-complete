const randomNumber=(parseInt(Math.random()*100+1));
console.log("randomNumber:",randomNumber);

const submitVariable=document.querySelector('#subt')
const userInput=document.querySelector('.guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultPar')

const p= document.createElement('p');

let prevGuess=[]
let numGuess=1

let playGame=true
if (playGame) {
    submitVariable.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })   
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }    else if (guess<1) {
        alert('Please enter a number more than 1')
    }   else if (guess>100) {
        alert('Please enter a  number less than 100')
    }else{

        prevGuess.push(guess)
        if(numGuess>=10){
            cleanUpGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else{
            cleanUpGuess(guess)
            checkGuess(guess)
        }
    }

}


function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
       endGame();
    } else if(guess<randomNumber){
        displayMessage(`Number is TOO low`)

    }else if(guess>randomNumber){
        displayMessage(`Number is TOO high`)

    }
}

function cleanUpGuess(guess){
    userInput.value=""
    guessSlot.innerHTML+=`${guess}  `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
    guessSlot.style.backgroundColor="lightgray"
    guessSlot.style.padding="5px"
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
userInput.value='';
userInput.setAttribute("disabled",'');
p.classList.add('button')
p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
startOver.appendChild(p);
playGame=false;
newGame();
}

function newGame(){
    const newGameButton=document.querySelector("#newGame");
    newGameButton.addEventListener('click',function(e){
        randomNumber=(parseInt(Math.Random)*100+1);
        prevGuess=[]
        numGuess=[]
        guessSlot.innerHTML=''
        remaining.innerHTML=''
        userInput.removeAttribute('disabled')
        startOver.removeChild('p')
        playGame=true
    })

}









