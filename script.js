
const score0Element = document.getElementById('score--0')
const score1Element = document.getElementById('score--1')
const diceElement = document.querySelector('.dice')
const buttonRoll = document.querySelector('.btn--roll')
const buttonHold = document.querySelector('.btn--hold')
const buttonNewGame = document.querySelector('.btn--new')

let currentScore0 = document.getElementById('current--0')
let currentScore1 = document.getElementById('current--1')
let player0 = document.querySelector('.player--0')
let player1 = document.querySelector('.player--1')


let currentScore = 0
const totalScore = [0,0]
let activePlayer = 0
let isPlaying = true

score0Element.textContent = '0'
score1Element.textContent = '0'
diceElement.classList.add('hidden')

const switchPlayer = () => {
  totalScore[activePlayer] += currentScore
 /* document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer]*/
  currentScore = 0
  document.getElementById(`current--${activePlayer}`).textContent = currentScore
  activePlayer =  activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active')
  player1.classList.toggle('player--active')
}

buttonRoll.addEventListener('click', function() {
  if(isPlaying){
  diceElement.classList.remove('hidden')
 let diceNumber = (Math.trunc(Math.random() * 6 + 1));
  diceElement.src = `dice${diceNumber}.png`

  if (diceNumber !== 1) {
    currentScore += diceNumber
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
  } else {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    activePlayer =  activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')

  }}
})

buttonHold.addEventListener('click', ()=> {
  if(isPlaying) {
  totalScore[activePlayer] += currentScore
  document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer]
  if (totalScore[activePlayer] >= 20) {
    isPlaying = false
    diceElement.classList.add('hidden')
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
  }else {
    switchPlayer()
  }}
})

buttonNewGame.addEventListener('click', ()=> {
  document.getElementById(`score--0`).textContent = 0
  document.getElementById(`score--1`).textContent = 0
  player0.classList.add('player--active')
  currentScore = 0
  diceElement.classList.add('hidden')
  currentScore0.textContent = 0
  currentScore1.textContent = 0



})






