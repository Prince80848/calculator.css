let currentInput = '';
let displayValue = '';

function appendCharacter(character) {
    currentInput += character;
    displayValue += character;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    currentInput = '';
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
