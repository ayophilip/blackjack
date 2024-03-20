let player = {
    name: "Ayo",
    chips: 0
}

let cards = []
let sum = 0
let message = ""
let blackjackWin = false
let isAlive = false
let startQuestion = document.getElementById("start-question")
let cardEL = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el").

// Number of chips
playerEl.textContent = player.name + ": $" + player.chips


// Generate random card numbers

function getRandomCard() {

    let randomNumber = Math.floor( Math.random()*13 ) + 1
    
    // if card is Ace (1) -> return 11
    // if 11-13 -> return 10
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}


function renderGame() {
    
    cardEL.textContent = "Cards: "
    // iterate over the cards array
    for (let i=0; i < cards.length; i++) {
        cardEL.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Pick another card!"
    } else if (sum === 21) {
        startQuestion.style.color = "#9A758E";
        message = "You've got Blackjack! You win!🎉🎉🎉";
        blackjackWin = true
    } else {
        //startQuestion.style.color = "red";
        message = "You're out of the game!😔"
        isAlive = false
    }
    startQuestion.textContent = message
}

function newCard() {
  if (isAlive === true && blackjackWin === false) { 
    let anotherCard = getRandomCard()
    sum += anotherCard
    cards.push(anotherCard)
    renderGame()

  }
}