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
    winningNum = 2,
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

// Listen for guess
UIguessBtn.addEventListener('click', function () {
    let guess = parseInt(UIguessInput.value);

// Validation
if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    
// Check if won
if (guess === winningNum) {
    // Disable input
    UIguessInput.disabled = true;
    // Change border color
    UIguessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct guess! You Win :)`, 'green');
} else {
    // incorrect number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
        // Game over - you've lost!

        // Disable input
        UIguessInput.disabled = true;
        // Change border color to red
        UIguessInput.style.borderColor = 'red';
        // Set message
        setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');

    } else {
        // Change border color to red
        UIguessInput.style.borderColor = 'red';
        // Game carries on - answer is wrong!
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
    }
}

})

// Set message 
function setMessage(msg, color) {
    UIguessMsg.style.color = color;
    UIguessMsg.textContent = msg;
}


   
    