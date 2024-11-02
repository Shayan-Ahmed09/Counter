let count = 0;

const counterDisplay = document.getElementById('counterDisplay');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

incrementButton.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementButton.addEventListener('click', () => {
    count--;
    updateDisplay();
});

function updateDisplay() {
    counterDisplay.textContent = count;
}
