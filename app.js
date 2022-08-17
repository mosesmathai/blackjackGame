
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ''

let startButton = document.getElementById('startBtn')
let messageEl = document.getElementById('messageEl')
let sumEl = document.getElementById('sumEl')
let cardsEl = document.getElementById('cardsEl')
let newCardButton = document.getElementById('newCardBtn')

let player = {
  userName: 'Musa',
  chips: '200'
}

let playerEl = document.getElementById('playerEl')
playerEl.innerText = `${player.userName} - Ksh ${player.chips}`

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1

  if (randomNumber === 1) {
    return 11
  } else if (randomNumber > 10) {
    return 10
  } else {
    return randomNumber
  }
  
}

renderGame = () => {
  cardsEl.innerText = 'Cards: '

  for (let index = 0; index < cards.length; index++) {
    cardsEl.innerText += cards[index] + '-'
  }

  sumEl.innerText = `Sum: ${sum}`

  if (sum <= 20) {
    message = 'Do you want to draw a new card?'
  } else if (sum === 21) {
    message = 'You have the blackjack'
    hasBlackJack = true
  } else {
    message = 'You have lost!'
    isAlive = false
  }
  
  messageEl.innerText = message
}

startGame = () => {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

newcard = () => {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
  } 
}

startButton.addEventListener('click', startGame)
newCardButton.addEventListener('click', newcard)