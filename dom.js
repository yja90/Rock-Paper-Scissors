// Global variables
let playerScore = 0;
let compScore = 0;
let playerSelection;
const instructions = document.querySelector('#instructions')
const gameScoreP = document.querySelector('#gameScoreP')
const gameScoreC = document.querySelector('#gameScoreC')
const result = document.querySelector('#result')
const resultOfRound = document.querySelector('#resultOfRound')
const resultOfRound2 = document.querySelector('#resultOfRound2')
const compsSelection = document.querySelector('#compsSelection')
const playersSelection = document.querySelector('#playersSelection')


//Function for computer to make a random choice
function computerPlay() {
  let computerChoice = ["Rock", "Paper", "Scissors"]
  let randomChoice = Math.floor(Math.random() * computerChoice.length);
  return (randomChoice, computerChoice[randomChoice]);
}


//Plays game and decides on winner
function playRound(playerSelection) {
  let computerSelection = computerPlay()
  if (playerSelection == "Rock" && computerSelection === "Scissors") {
    playerScore++
    gameScoreP.style.color = '#00FF00'
    gameScoreC.style.color = null
    resultOfRound.textContent = 'Your round'
    resultOfRound2.textContent = 'Rock beats scissors!'
    compsSelection.src = "images/scissors.png"
    playersSelection.src = "images/rock.png"
    resultContent()
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    compScore++
    gameScoreC.style.color = '#00FF00'
    gameScoreP.style.color = null
    resultOfRound.textContent = "Opponent's round"
    resultOfRound2.textContent = 'Paper beats rock!'
    playersSelection.src = "images/rock.png"
    compsSelection.src = "images/paper.png"
    resultContent()
  } else if (playerSelection == "Rock" && computerSelection == "Rock") {
    gameScoreP.style.color = null
    gameScoreC.style.color = null
    resultOfRound.textContent = 'Bad luck, it was a draw. Go again!'
    resultOfRound2.textContent = null
    playersSelection.src = "images/rock.png"
    compsSelection.src = "images/rock.png"
    resultContent()
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    compScore++
    resultOfRound.textContent = "Opponent's round"
    resultOfRound2.textContent = 'Rock beats scissors!'
    gameScoreC.style.color = '#00FF00'
    gameScoreP.style.color = null
    compsSelection.src = "images/rock.png"
    playersSelection.src = "images/scissors.png"
    resultContent()
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore++
    resultOfRound.textContent = 'Your round'
    resultOfRound2.textContent = 'Scissors beats paper!'
    gameScoreP.style.color = '#00FF00'
    gameScoreC.style.color = null
    compsSelection.src = "images/paper.png"
    playersSelection.src = "images/scissors.png"
    resultContent()
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    resultOfRound.textContent = 'Bad luck, it was a draw. Go again!'
    resultOfRound2.textContent = null
    gameScoreP.style.color = null
    gameScoreC.style.color = null
    compsSelection.src = "images/scissors.png"
    playersSelection.src = "images/scissors.png"
    resultContent()
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    compScore++;
    resultOfRound.textContent = "Opponent's round"
    resultOfRound2.textContent = 'Scissors beats paper!'
    gameScoreP.style.color = null
    gameScoreC.style.color = '#00FF00'
    compsSelection.src = "images/scissors.png"
    playersSelection.src = "images/paper.png"
    resultContent()
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerScore++;
    resultOfRound.textContent = "Your round"
    resultOfRound2.textContent = 'Paper beats rock!'
    gameScoreP.style.color = '#00FF00'
    gameScoreC.style.color = null
    compsSelection.src = "images/rock.png"
    playersSelection.src = "images/paper.png"
    resultContent()
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    resultOfRound.textContent = "Bad luck, it was a draw. Go again!"
    resultOfRound2.textContent = null
    gameScoreP.style.color = null
    gameScoreC.style.color = null
    compsSelection.src = "images/paper.png"
    playersSelection.src = "images/paper.png"
    resultContent()
  }
  if (playerScore === 5) {
    result.textContent = 'You win!';
    resetButton.style.top = '45%'
    disableContent()
  } else if (compScore === 5) {
    result.textContent = 'Opponent wins!'
    disableContent()
    resetButton.style.top = '45%'
  } else {
    result.textContent = null
  }
  instructions.textContent = null
}

//Displays player and computer score
function resultContent() {
  gameScoreP.textContent = playerScore
  gameScoreC.textContent = compScore
}

//Disables buttons and removes content
function disableContent() {
  rock.disabled = true;
  scissors.disabled = true;
  paper.disabled = true;
  playerScore = 0;
  compScore = 0;
  resultOfRound.textContent = null
  resultOfRound2.textContent = null
  instructions.textContent = null
}


// Resets all values
function resetValues() {
  rock.disabled = false;
  scissors.disabled = false
  paper.disabled = false
  playerScore = 0
  compScore = 0
  result.textContent = null
  gameScoreP.textContent = "0"
  gameScoreC.textContent = "0"
  gameScoreP.style.color = null
  gameScoreC.style.color = null
  resultOfRound.textContent = null
  resultOfRound2.textContent = null
  playersSelection.src = null
  compsSelection.src = null
  instructions.textContent = 'Start the game by making a selection'
  resetButton.style.top = '85%'
}


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playRound("Rock")
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playRound("Scissors")
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playRound("Paper")
})

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetValues);
