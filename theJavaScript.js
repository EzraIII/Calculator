let firstNumber = '0';
let operation = '';
let secondNumber = '';
let hasDecimalPoint = false;
let activeNumber = firstNumber;

function autoUpdate() {
    if(operation=='') {
        firstNumber = activeNumber;
    } else {
        secondNumber = activeNumber;
    }
}

function updateDisplay() {
    document.getElementById("myText").innerHTML = (firstNumber + ' ' + operation + ' ' + secondNumber).trim();
}

function calculate() {
    firstNumber = String(eval(firstNumber + operation + secondNumber));
    operation = '';
    secondNumber = '';
    hasDecimalPoint = firstNumber.includes('.');
    activeNumber = firstNumber
    updateDisplay();
}

function clearString() {
    firstNumber = '0';
    operation = '';
    secondNumber = '';
    hasDecimalPoint = false;
    activeNumber = firstNumber;
    updateDisplay();
}

function addNumber(character) {
    if(activeNumber=='0') {
        activeNumber = character;
    } else {
        activeNumber += character;
    }
    autoUpdate();
    updateDisplay();
}

function addOperation(character) {
    if(operation!='') {
        calculate();
    }
    operation = character;
    secondNumber = '0';
    hasDecimalPoint = false;
    activeNumber = '0';
    updateDisplay();
}

function addDecimalPoint() {
    if(hasDecimalPoint==false) {
        activeNumber += '.';
        hasDecimalPoint = true;
        autoUpdate();
        updateDisplay();
    }
}