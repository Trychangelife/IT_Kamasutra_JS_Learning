let buttonPlus = document.getElementById('buttonPlus');
let buttonMunus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDevide = document.getElementById('buttonDevide');

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function makeOperation(operationCode) {

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);


    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;

    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}
var operationButtons = [buttonPlus, buttonMunus, buttonMultiply, buttonDevide];

for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    operationButtons[i].addEventListener('click', onOperationButtonClick);
    };
    