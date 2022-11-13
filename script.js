
const score0Element = document.getElementById('score--0')
const score1Element = document.getElementById('score--1')
const diceElement = document.querySelector('.dice')
const buttonRoll = document.querySelector('.btn--roll')

let currentScore0 = document.getElementById('current--0')
let currentScore1 = document.getElementById('current--1')

let currentScore = 0

score0Element.textContent = '0'
score1Element.textContent = '0'
diceElement.classList.add('hidden')

buttonRoll.addEventListener('click', function() {
  diceElement.classList.remove('hidden')
 let diceNumber = (Math.trunc(Math.random() * 6 + 1));
  diceElement.src = `dice${diceNumber}.png`

  if (diceNumber !== 1) {
    currentScore += diceNumber
    currentScore0.textContent = currentScore
  } else {
    currentScore = 0
    currentScore0.textContent = currentScore

  }
})






