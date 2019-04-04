let string = '';
let lastString = '';
let lastIsSymbol = false;
function autoFix() {
    if(string == '0') {
        string = '';
    }
    if(string == '') {
        document.getElementById("myText").innerHTML = '0';
    } else {
        document.getElementById("myText").innerHTML = string;
    }
}
function myFunction(character, symbol) {
    if(lastIsSymbol&&symbol) {
        string = lastString;
    }
    if(string=='' && symbol) {
        lastString = string;
        string = '0' + character;
    } else {
        lastString = string;
        string = string + character;
    }
    lastIsSymbol = symbol;
    autoFix();
}
function calculate() {
    if(string=='') {
        string = '0';
    }
    if (lastIsSymbol) {
        string = String(eval(lastString))
    } else {
        string = String(eval(string));
    }
    lastIsSymbol = false;
    autoFix();
}
function clearString() {
    string = '';
    autoFix();
}