const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'clear') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '';
    } else if (value === '=') {
      if (operator && previousInput) {
        currentInput = eval(`${previousInput}${operator}${currentInput}`);
        display.textContent = currentInput;
        previousInput = '';
        operator = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});