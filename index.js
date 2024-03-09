let firstCard = 8
let secondCard = 10
let cards = [firstCard, secondCard]
let sum = firstNumber + secondNumber
let message = ""
let blackjackWin = false
let startQuestion = document.getElementById("start-question")
let cardEL = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")


function startGame() {
    renderGame()
}


function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEL.textContent = "Cards: " + cards[0] + ", " + cards[1]
    
    if (sum <=20) {
        message = "Pick another card!"
    } else if (sum===21) {
        message = "You've got Blackjack! You win!"
        blackjackWin = true
    } else {
        message = "You're out of the game!"
    }
    startQuestion.textContent = message
}

function newCard() {
    let anotherCard = 4
    sum+=anotherCard
    cards.push(anotherCard)
    renderGame()
}
