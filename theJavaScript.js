"use strict";

let firstNumber = '0';
let operation = '';
let secondNumber = '';
let hasDecimalPoint = false;
let activeNumber = firstNumber;
let numberOfCharacters = firstNumber.length + operation.length + secondNumber.length;

function checkIfValid() { // incorrectly named
    if (numberOfCharacters >= 17 || firstNumber.length >= 15) { // Redundant
        return false;
    } else {
        return true;
    }
}
function autoUpdate() {
    if(operation=='') { // === instead of ==
        firstNumber = activeNumber;
    } else {
        secondNumber = activeNumber;
    }
    numberOfCharacters = firstNumber.length + operation.length + secondNumber.length;
}
function updateDisplay() {
    if(operation==='') {
        document.getElementById('display').innerHTML = firstNumber; // Cache retrieved DOM elements. DOM queries are expensive
    } else {
        document.getElementById('display').innerHTML = firstNumber + ' ' + operation + ' ' + secondNumber;
    }
}

function calculate() {
    firstNumber = String(eval(firstNumber + operation + secondNumber)); // eval is dangerous, generally
    operation = '';
    secondNumber = '';
    if (firstNumber.length > 15) {
        firstNumber = String(Number(firstNumber).toPrecision(10)); // Avoid setting a value twice, if once would suffice
    }
    hasDecimalPoint = firstNumber.includes('.');
    activeNumber = firstNumber
    updateDisplay();
}

function clearString() {
    // Is setting duplicate values as the top of the file.
    firstNumber = '0';
    operation = '';
    secondNumber = '';
    hasDecimalPoint = false;
    activeNumber = firstNumber;
    // Doesn't update numberOfCharacters    
    updateDisplay();
}

function addNumber(character) {
    if(activeNumber=='0') { // === instead of ==
        activeNumber = '';
    }
    if(checkIfValid()) {
        activeNumber += character;
    }
    autoUpdate();
    updateDisplay();
}

function addOperation(character) {
    if(operation!='') { // !== instead of !=
        calculate();
    }
    operation = character;
    secondNumber = '0';
    hasDecimalPoint = false;
    activeNumber = '0';
    updateDisplay();
}

function addDecimalPoint() {
    if (checkIfValid()) {
        if(hasDecimalPoint==false) {
            activeNumber += '.';
            hasDecimalPoint = true;
            autoUpdate();
            updateDisplay();
        }
    }
}