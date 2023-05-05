'use strict';
// Player 1
let score1 = document.querySelector('#score--0');
let current1 = document.querySelector('#current--0');

// Player 2
let score2 = document.querySelector('#score--1');
let current2 = document.querySelector('#current--1');

// Game elements
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let scores, activePlayer, poolScore, playing;

// Game init
const init = function () {
    // 0 is player 1, 1 is player 2
    scores = [0, 0];
    activePlayer = 0;
    poolScore = 0;
    playing = true;

    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;

    dice.classList.add('hidden');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    document.querySelector('.player').classList.remove('player--winner');
}
init();

// Game play
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    poolScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
    dice.classList.add('hidden');
}

btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. generating a random dice
        const diceNumber = Math.trunc(Math.random() * 6 + 1);
        // console.log(diceNumber);
        // 2. display that pic
        dice.classList.remove('hidden');
        dice.src = `dice-${diceNumber}.png`;
        // 3. check if it's 1 -> switch player : re-generate the dice
        if (diceNumber !== 1) {
            poolScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).
                textContent = poolScore;
        } else {
            switchPlayer();
        }
    }

})

// press hold, add the current score to the total score and switch player
btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. add current score to active player
        scores[activePlayer] += poolScore;
        document.getElementById(`score--${activePlayer}`).
            textContent = scores[activePlayer];
        // 2. check if the score is >= 100
        // if -> finish game
        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).
            classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).
            classList.remove('player--active');
        } else {
            //switch player
            switchPlayer();
        }
    }
})

// Game reset
// all scores to 0, set player 1 as starting player
const btnReset = document.querySelector('.btn--new');

btnReset.addEventListener('click', init);

// Pop-up guides control
const guide = document.querySelector('.guide');
const overlay = document.querySelector('.overlay');
const btnGuide = document.querySelector('.explain');
btnGuide.addEventListener('click', function () {
    guide.classList.remove('hidden');
    overlay.classList.remove('hidden');
    }
)

overlay.addEventListener('click', function () {
    guide.classList.add('hidden');
    overlay.classList.add('hidden');
})