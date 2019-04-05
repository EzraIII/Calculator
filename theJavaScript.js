let firstNumber = '0';
let operation = '';
let secondNumber = '';
let hasDecimalPoint = false;
function autoFix() {
    if(operation!='') {
        document.getElementById("myText").innerHTML = firstNumber + ' ' + operation + ' ' + secondNumber;
    } else {
        document.getElementById("myText").innerHTML = firstNumber;
    }
}
function calculate() {
    firstNumber = String(eval(firstNumber + operation + secondNumber));
    operation = '';
    secondNumber = '';
    hasDecimalPoint = false;
    autoFix();
}
function clearString() {
    firstNumber = '0';
    operation = '';
    secondNumber = '';
    hasDecimalPoint = false;
    autoFix();
}
function myFunction(character, isOperation) {
    if(operation!='') {
        if(isOperation) {
            calculate();
            operation = character;
            secondNumber = '0';
            hasDecimalPoint = false;
        } else if(character=='.') {
            if(hasDecimalPoint==false) {
                secondNumber = secondNumber + character;
                hasDecimalPoint = true;
            }
        } else {
            if(secondNumber=='0') {
                secondNumber = character;
            } else {
                secondNumber = secondNumber + character;
            }
        }
    } else {
        if(isOperation) {
            operation = character;
            secondNumber = '0';
            hasDecimalPoint = false;
        } else if(character=='.') {
            if(hasDecimalPoint==false) {
                firstNumber = firstNumber + character;
                hasDecimalPoint = true;
            }
        } else {
            if(firstNumber=='0') {
                firstNumber = character;
            } else {
                firstNumber = firstNumber + character;
            }
        }
    }
    autoFix();
}