const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const buttonNewGame = document.querySelector('.btn--new');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');


let currentScore = 0;
const totalScore = [0, 0];
let activePlayer = 0;
let isPlaying = true;

score0Element.textContent = '0';
score1Element.textContent = '0';
diceElement.classList.add('hidden');

const switchPlayer = () => {
  currentScore = 0;
  totalScore[activePlayer] += currentScore;
  /* document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer]*/

  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

buttonRoll.addEventListener('click', function() {
  if (isPlaying) {
    diceElement.classList.remove('hidden');
    const diceNumber = (Math.trunc(Math.random() * 6 + 1));
    diceElement.src = `dice${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      console.log(currentScore);
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = '0';
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');

    }
  }
});

buttonHold.addEventListener('click', () => {
  if (isPlaying) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];
    if (totalScore[activePlayer] >= 20) {
      isPlaying = false;
      diceElement.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

buttonNewGame.addEventListener('click', () => {
  isPlaying = true;
  player0.classList.add('player--active');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.getElementById(`score--0`).textContent = '0';
  document.getElementById(`score--1`).textContent = '0';
  totalScore[0] = 0;
  totalScore[1] = 0;
  currentScore = 0;
  diceElement.classList.add('hidden');
  currentScore0.textContent = '0';
  currentScore1.textContent = '0';
});






