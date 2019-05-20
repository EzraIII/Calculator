"use strict";

let firstNumber;
let operation;
let secondNumber;
let hasDecimalPoint;
let activeNumber;
let numberOfCharacters;

function checkIfTooLong() {
    return !(numberOfCharacters >= 17 || firstNumber.length >= 15);
}
function autoUpdate() {
    if(operation==='') {
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
    activeNumber = firstNumber;
    updateDisplay();
}

function clearString() {
    firstNumber = '0';
    operation = '';
    secondNumber = '';
    hasDecimalPoint = false;
    activeNumber = firstNumber;
    numberOfCharacters = firstNumber.length + operation.length + secondNumber.length;
    updateDisplay();
}

function addNumber(character) {
    if(activeNumber==='0') {
        activeNumber = character;
    } else if(checkIfTooLong()) {
        activeNumber += character;
    }
    autoUpdate();
    updateDisplay();
}

function addOperation(character) {
    if(operation!=='') {
        calculate();
    }
    operation = character;
    secondNumber = '0';
    hasDecimalPoint = false;
    activeNumber = '0';
    updateDisplay();
}

function addDecimalPoint() {
    if (checkIfTooLong()) {
        if(hasDecimalPoint==false) {
            activeNumber += '.';
            hasDecimalPoint = true;
            autoUpdate();
            updateDisplay();
        }
    }
}

clearString();