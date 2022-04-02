let buttonPlus = document.getElementById('buttonPlus');
let buttonMunus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDevide = document.getElementById('buttonDevide');

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function getNumber1() {
    return Number(input1.value);
}
function getNumber2() {
    return Number(input2.value);
}

function makeOperation(operationCode) {
    if (operationCode === '+') {
        var result = getNumber1() + getNumber2();
    } else if (operationCode === '-') {
        var result = getNumber1() - getNumber2();
    } else if (operationCode === '*') {
        var result = getNumber1() * getNumber2();
    } else if (operationCode === '/') {
        var result = getNumber1() / getNumber2();
        
    }

    window.alert(result);
    
}


function onButtonPlusClick() {
    makeOperation('+');
}

function onButtonMunusClick() {
    makeOperation('-');

}

function onButtonMultiplyClick() {
    makeOperation('*');
}

function onButtonDevideClick() {
    makeOperation('/');
}


buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMunus.addEventListener('click', onButtonMunusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);

