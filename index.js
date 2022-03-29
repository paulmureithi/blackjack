let firstCard = 9
let secondCard = 8
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function playGame(){
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    if (sum <= 20){
        message = "Do you want to draw another card?"
    }else if (sum === 21){
        message = "BlackJack!! Congratulations, you've won!!"
        hasBlackJack = true
    }else {
        message = "Sorry, you've lost!!"
        isAlive = false
    }

    messageEl.textContent = message

}

function startGame() {
    playGame()
}

function newCard(){
    let thirdCard = 5
    sum += thirdCard
    playGame()
}
