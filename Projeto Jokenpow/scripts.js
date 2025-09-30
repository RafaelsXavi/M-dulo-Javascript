const choices = ['pedra', 'papel', 'tesoura'];
const choiceEmojis = {
    pedra: '✊',
    papel: '✋',
    tesoura: '✌️'
};

let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultMessageElement = document.getElementById('result-message');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const choiceButtons = document.querySelectorAll('.choice-btn');

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playGame(playerChoice);
    });
});

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    
    playerChoiceElement.textContent = choiceEmojis[playerChoice];
    computerChoiceElement.textContent = choiceEmojis[computerChoice];
    
    const result = getResult(playerChoice, computerChoice);
    
    updateScore(result);
    displayResult(result);
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(player, computer) {
    if (player === computer) {
        return 'empate';
    }
    
    if (
        (player === 'pedra' && computer === 'tesoura') ||
        (player === 'papel' && computer === 'pedra') ||
        (player === 'tesoura' && computer === 'papel')
    ) {
        return 'vitoria';
    }
    
    return 'derrota';
}

function updateScore(result) {
    if (result === 'vitoria') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (result === 'derrota') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

function displayResult(result) {
    let message;
    
    switch (result) {
        case 'vitoria':
            message = 'Você venceu! 🎉';
            break;
        case 'derrota':
            message = 'Você perdeu! 😢';
            break;
        case 'empate':
            message = 'Empate! 🤝';
            break;
    }
    
    resultMessageElement.textContent = message;
}
