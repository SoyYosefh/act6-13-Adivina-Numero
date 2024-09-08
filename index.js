
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);
    let feedback = document.getElementById('feedback');
    let attemptsDisplay = document.getElementById('attempts');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        feedback.style.color = 'red';
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (guess === randomNumber) {
        feedback.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
        feedback.style.color = 'green';
        document.getElementById('guessInput').disabled = true;
        document.querySelector('.input-group button').disabled = true;
    } else if (guess < randomNumber) {
        feedback.textContent = "El número es mayor. Intenta de nuevo.";
        feedback.style.color = '#007bff';
    } else {
        feedback.textContent = "El número es menor. Intenta de nuevo.";
        feedback.style.color = '#007bff';
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('guessInput').disabled = false;
    document.querySelector('.input-group button').disabled = false;
    document.getElementById('guessInput').value = '';
    document.getElementById('feedback').textContent = '';
}
