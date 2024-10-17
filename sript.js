let num1, num2, correctAnswer;

function generateQuestion() {
    let tables = [4, 5];
    num1 = tables[Math.floor(Math.random() * tables.length)];
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;

    document.getElementById('question').innerText = `What is ${num1} x ${num2}?`;
    document.getElementById('feedback').innerText = '';
    document.getElementById('answer').value = '';
}

function checkAnswer() {
    let userAnswer = document.getElementById('answer').value;

    if (userAnswer == correctAnswer) {
        document.getElementById('feedback').innerText = 'Correct! 🎉';
        document.getElementById('feedback').style.color = 'green';
    } else {
        document.getElementById('feedback').innerText = 'Try again!';
        document.getElementById('feedback').style.color = 'red';
    }
}

// Generate a question on page load
window.onload = generateQuestion;
