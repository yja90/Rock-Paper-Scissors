// Global variables
let playerScore = 0;
let compScore = 0;
let totalGamesToPlay = 5
let gamesPlayed = 0
let playerSelection;


function computerPlay() {
  let computerChoice = ["Rock", "Paper", "Scissors"]
  let randomChoice = Math.floor(Math.random() * computerChoice.length);
  return (randomChoice, computerChoice[randomChoice]);
}

function playRound(playerSelection) {
  const gameScoreP = document.querySelector('#gameScoreP')
  const gameScoreC = document.querySelector('#gameScoreC')
  const result = document.querySelector('#result')
  const sameSelection = document.querySelector('#sameSelection')
  const compsSelection = document.querySelector('#compsSelection')
  let computerSelection = computerPlay()


  // set text content to say they both made the same selection
  if (playerSelection == "Rock" && computerSelection === "Scissors") {
    playerScore++
    gameScoreP.style.color = 'green'
    gameScoreC.style.color = null
    sameSelection.textContent = null
    resultContent()
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    compScore++
    gameScoreC.style.color = 'red'
    gameScoreP.style.color = null
    sameSelection.textContent = null
    resultContent()
  } else if (playerSelection == "Rock" && computerSelection == "Rock") {
    // playerScore++, compScore++
    gameScoreP.style.color = null
    gameScoreC.style.color = null
    sameSelection.textContent = 'You both chose rock, please make another selection'
    resultContent()
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    compScore++
    sameSelection.textContent = null
    gameScoreC.style.color = 'red'
    gameScoreP.style.color = null
    resultContent()
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore++
    sameSelection.textContent = null
    gameScoreP.style.color = 'green'
    gameScoreC.style.color = null
    resultContent()
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    // playerScore++, compScore++
    sameSelection.textContent = 'You both chose scissors, please make another selection'
    gameScoreP.style.color = null
    gameScoreC.style.color = null
    resultContent()
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    compScore++;
    sameSelection.textContent = null
    gameScoreP.style.color = null
    gameScoreC.style.color = 'red'

    resultContent()
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerScore++;
    sameSelection.textContent = null
    gameScoreP.style.color = 'green'
    gameScoreC.style.color = null

    resultContent()
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    // playerScore++, compScore++
    sameSelection.textContent = 'You both chose paper, please make another selection'
    gameScoreP.style.color = null
    gameScoreC.style.color = null

    resultContent()
  }

  function resultContent() {
    gamesPlayed++;
    gameScoreP.textContent = playerScore
    gameScoreC.textContent = compScore
    compsSelection.textContent = 'Computer chose: ' + computerSelection
  }

  if (playerScore === 5) {

    result.textContent = 'You win!';
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
    playerScore = 0;
    compScore = 0;
  } else if (compScore === 5) {
    result.textContent = 'Computer wins!'
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
    playerScore = 0;
    compScore = 0;
  } else if (playerScore && compScore === 5) {
    result.textContent = 'It was a draw. Make another selection to start the game again.'
    playerScore = 0;
    compScore = 0;
  } else {
    result.textContent = null
  }

}

function resetValues() {
  rock.disabled = false;
  scissors.disabled = false
  paper.disabled = false
  playerScore = 0
  compScore = 0
  result.textContent = null
  gameScoreP.textContent = "0"
  gameScoreC.textContent = "0"
  compsSelection.textContent = 'Computer chose:'
  gameScoreP.style.color = null
  gameScoreC.style.color = null
  sameSelection.textContent = null

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
