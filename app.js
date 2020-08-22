/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;
let gamePlaying = true
let diceOne = document.getElementById('dice-1');
let diceTwo = document.getElementById('dice-2');
let lastDice;
init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying === true) {
        // 1.Random Number
        var diceOneRandom = Math.floor(Math.random() * 6) + 1;
        var diceTwoRandom = Math.floor(Math.random() * 6) + 1;

        //2. Display The Result
        // var diceDom = diceOne;
        diceOne.style.display = 'block';
        diceOne.src = 'images/dice-' + diceOneRandom + '.png';

        diceTwo.style.display = 'block';
        diceTwo.src = 'images/dice-' + diceTwoRandom + '.png';

        if (diceOneRandom == 6 && diceTwoRandom == 6 && lastDice == 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
        } else if (diceOneRandom !== 1 && diceTwoRandom !== 1) {
            roundScore += (diceOneRandom + diceTwoRandom);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }

        // lastDice =
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying == true) {
        //1. ADD current scores to global score
        score[activePlayer] += roundScore;

        //2. Update the UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        let inputScore = document.querySelector('.final-score').value;
        let finalScore

        if(inputScore) {
            finalScore = inputScore
        } else {
            finalScore = 50
        }

        
        //3. Check if player won game
        if (score[activePlayer] > finalScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER !'
            diceOne.style.display = 'none';
            diceTwo.style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
})

function nextPlayer() {
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceOne.style.display = 'none';
    diceTwo.style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    score = [0, 0]
    roundScore = 0
    activePlayer = 0
    gamePlaying = true
    

    diceOne.style.display = 'none'
    diceTwo.style.display = 'none'

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}