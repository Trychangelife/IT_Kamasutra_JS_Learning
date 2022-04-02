let buttonPlus = document.getElementById('buttonPlus');
let buttonMunus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDevide = document.getElementById('buttonDevide');

function onButtonPlusClick() {
    let input1 = document.getElementById("number1");
    let input2 = document.getElementById("number2");

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let summ = number1 + number2;
    window.alert(summ);
}

function onButtonMunusClick() {
    let input1 = document.getElementById("number1");
    let input2 = document.getElementById("number2");

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let summ = number1 - number2;
    window.alert(summ);

}

function onButtonMultiplyClick() {
    let input1 = document.getElementById("number1");
    let input2 = document.getElementById("number2");

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let summ = number1 * number2;
    window.alert(summ);
}

function onButtonDevideClick() {
    let input1 = document.getElementById("number1");
    let input2 = document.getElementById("number2");

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let summ = number1 / number2;
    window.alert(summ);
}


buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMunus.addEventListener('click', onButtonMunusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);

