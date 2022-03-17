let firstCard = 10
let secondCard = 8
let sum = firstCard + secondCard + 10
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

function startGame(){
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
