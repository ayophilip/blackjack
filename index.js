let cards = []
let sum = 0
let message = ""
let blackjackWin = false
let startQuestion = document.getElementById("start-question")
let cardEL = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")



//function getRandomNumber() {
//    let minNumber = 1;
//    let maxNumber = 12;
//    return Math.floor(Math.random() * (maxNumber-minNumber) + minNumber);
//}

// Creates a random number between 1 & 11
//minimum number in a blackjack is 1 while the max is 13
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    
    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    let sum = firstCard + secondCard

    renderGame()
}


function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEL.textContent = "Cards: "

    for(let i=0; i<cards.length; i++){
        cardEL.textContent =+cards[i] + ", "
    }
    
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
  if (isAlive === true && blackjackWin === false) { 
    let anotherCard = getRandomCard()
    sum+=anotherCard
    cards.push(anotherCard)
    renderGame()

  }
}
