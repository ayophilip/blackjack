let firstNumber = 8
let secondNumber = 10
let sum = firstNumber + secondNumber
let message = ""
let blackjackWin = false
let startQuestion = document.getElementById("start-question")
let cardEL = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function startGame() {
    sumEl.textContent = "Sum: " + sum
    cardEL.textContent = "Cards: " + firstNumber + ", " + secondNumber
    
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
    let card = 4

    sum+=card

    startGame()
}