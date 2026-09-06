let minBet = 5
let maxBet = 50
let balance = 1000
let symbols = ['🛎️', '🍒', '7️⃣', '💰', '👑']

const winningFactor = 4
let bet = document.getElementById('bet')

document.querySelector('#submit').addEventListener('click', runSlotMachine)

function runSlotMachine() {
    const currentBet = document.querySelector('#bet')
    slotMachine(currentBet.value)
}


function slotMachine(bet) {
    // get 
    function getRandomSymbol() {
        let randomNumber = Math.random()
        if (randomNumber < .20) {
            reel = symbols[0]
        }
        else if (randomNumber < .40) {
            reel = symbols[1]
        }
        else if (randomNumber < .60) {
            reel = symbols[2]
        }
        else if (randomNumber < .80) {
            reel = symbols[3]
        }
        else {
            reel = symbols[4]
        }
        return reel
    }


    if (bet > 0 && bet >= minBet && bet <= maxBet && bet <= balance ) {
        let reel1 = getRandomSymbol()
        let reel2 = getRandomSymbol()
        let reel3 = getRandomSymbol()
        let current_balance = document.getElementById("current-balance")

        console.log(reel1, reel2, reel3)
        let first_reel = document.getElementById("first-reel")
        let second_reel = document.getElementById("second-reel")
        let third_reel = document.getElementById("third-reel")
        
        //change the empty reel sections to the reel roll it landed on
        first_reel.innerHTML = `${reel1}`
        second_reel.innerHTML = `${reel2}`
        third_reel.innerHTML = `${reel3}`


        if (reel1 === reel2 && reel2 === reel3) {
            console.log('WIN')
            balance += balance + (bet * winningFactor)
            result = document.getElementById('result')
            result.innerHTML = `You win! Your remaining balance is : \$${balance}`
            current_balance.innerHTML = `Current Balance: \$${balance}`
        } else {
            console.log('LOSE')
            balance = balance - bet
            result.innerHTML = `You lose! Your remaining balance is : \$${balance}`
            current_balance.innerHTML = `Current Balance: \$${balance}`
        }
        console.log(balance, bet)
    } else {
        console.log("Invalid bet", balance, bet)
        // balance.innerHTML = `${balance}`
        result.innerHTML = `You cannot place this bet! Your bet must be less than \$${balance} or more than \$${minBet}. Your remaining balance is : \$${balance}.`
    }

    if (balance <= 0) {
        current_balance.innerHTML = `Current Balance: $0`
        result.innerHTML = `You are out of money! Please restart the game to play again!`
    
    }
}

