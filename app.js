/* Game Rules! 
    - Player must guess a number between a 1 to 10
    - Player gets a certain amount of guesses
    - Notify player of guesses remaining
    - Notify the player of the correct answer if loose
    - Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const UIgame = document.querySelector('game'),
    UIminNum = document.querySelector('.min-num'),
    UImaxNum = document.querySelector('.max-num'),
    UIguessBtn = document.querySelector('#guess-btn'),
    UIguessInput = document.querySelector('#guess-input'),
    UIguessMsg = document.querySelector('.msg');

// Assing UI min & max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listen for guess
UIguessBtn.addEventListener('click', function () {
    let guess = parseInt(UIguessInput.value);

    // Validation
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    
    // Check if won
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct number :)`);
    } else {
        // incorrect number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game over - you've lost!
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            // Game carries on - answer is wrong!
            UIguessInput.value = '';
            // Change border color to red
            UIguessInput.style.borderColor = 'red';

            // Tell user if it is a wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }

});

// Game over 
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    UIguessInput.disabled = true;
    // Change border color
    UIguessInput.style.borderColor = color;
    // Set text color to green
    UIguessMsg.style.color = color;
    // Set message
    setMessage(msg);

    // Play again
    UIguessBtn.value = 'Play Again';
    UIguessBtn.className += 'play-again';
}

// Get Random Winning Number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+min);
}

// Set message 
function setMessage(msg, color) {
    UIguessMsg.style.color = color;
    UIguessMsg.textContent = msg;
}


   
    