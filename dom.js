// Global variables
let playerScore = 0;
let compScore = 0;
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
  const playersSelection = document.querySelector('#playersSelection')
  let computerSelection = computerPlay()


  if (playerSelection == "Rock" && computerSelection === "Scissors") {
    playerScore++
    gameScoreP.style.color = 'green'
    gameScoreC.style.color = null
    sameSelection.textContent = null
    compsSelection.src = "images/scissors.png"
    playersSelection.src = "images/rock.png"
    resultContent()
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    compScore++
    gameScoreC.style.color = 'red'
    gameScoreP.style.color = null
    sameSelection.textContent = null
    playersSelection.src = "images/rock.png"
    compsSelection.src = "images/paper.png"
    resultContent()
  } else if (playerSelection == "Rock" && computerSelection == "Rock") {
    gameScoreP.style.color = null
    gameScoreC.style.color = null
    sameSelection.textContent = 'You both chose rock, please make another selection'
    playersSelection.src = "images/rock.png"
    compsSelection.src = "images/rock.png"
    resultContent()
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    compScore++
    sameSelection.textContent = null
    gameScoreC.style.color = 'red'
    gameScoreP.style.color = null
    compsSelection.src = "images/rock.png"
    playersSelection.src = "images/scissors.png"
    resultContent()
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore++
    sameSelection.textContent = null
    gameScoreP.style.color = 'green'
    gameScoreC.style.color = null
    compsSelection.src = "images/paper.png"
    playersSelection.src = "images/scissors.png"
    resultContent()
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    sameSelection.textContent = 'You both chose scissors, please make another selection'
    gameScoreP.style.color = null
    gameScoreC.style.color = null
    compsSelection.src = "images/scissors.png"
    playersSelection.src = "images/scissors.png"
    resultContent()
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    compScore++;
    sameSelection.textContent = null
    gameScoreP.style.color = null
    gameScoreC.style.color = 'red'
    compsSelection.src = "images/scissors.png"
    playersSelection.src = "images/paper.png"
    resultContent()
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerScore++;
    sameSelection.textContent = null
    gameScoreP.style.color = 'green'
    gameScoreC.style.color = null
    compsSelection.src = "images/rock.png"
    playersSelection.src = "images/paper.png"
    resultContent()
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    sameSelection.textContent = 'You both chose paper, please make another selection'
    gameScoreP.style.color = null
    gameScoreC.style.color = null
    compsSelection.src = "images/paper.png"
    playersSelection.src = "images/paper.png"
    resultContent()
  }

  function resultContent() {
    gameScoreP.textContent = playerScore
    gameScoreC.textContent = compScore
  }
  if (playerScore === 5) {
    result.textContent = 'You win!';
    disableContent()
  } else if (compScore === 5) {
    result.textContent = 'Computer wins!'
    disableContent()
  } else {
    result.textContent = null
  }
}



function disableContent() {
  rock.disabled = true;
  scissors.disabled = true;
  paper.disabled = true;
  playerScore = 0;
  compScore = 0;
  compsSelection.src = null
  playersSelection.src = null
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
  playersSelection.src = null
  compsSelection.src = null
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
