var showscore = document.getElementById('score'); 
var showtotalsc = document.getElementById('totalsc');
var shownumber1 = document.getElementById('number1');
var showop = document.getElementById('op');
var shownumber2 = document.getElementById('number2');
var showanswer = document.getElementById('answer');
var showresult = document.getElementById('result');
var showplus = document.getElementById('plus');
showplus.checked = true;
showop.innerHTML = "+";
var score = 0;
var totalsc = 0;
var number1 = 0;
var number2 = 0;
var total = 0;
showscore.innerHTML = score;
showtotalsc.innerHTML = totalsc;

function random() {
    showtotalsc.innerHTML = totalsc;
    number1 = Math.floor(Math.random() * 100);
    number2 = Math.floor(Math.random() * 100);
    shownumber1.innerHTML = number1;
    shownumber2.innerHTML = number2;
}

function start() {
    random();
    totalsc = 0;
    score = 0;
    showkor.innerHTML = totalsc;
    showscore.innerHTML = score;
    showanswer.value = '';
}

function btnanswer() {
    checkop();
    if (total == showanswer.value) {
        showresult.innerHTML = 'Correct';
        showresult.style.color = 'green';
        score += 1;
        showscore.innerHTML = score;
        showanswer.value = '';
    } else {
        showresult.innerHTML = 'Incorrect';
        showresult.style.color = 'red';
        showanswer.value = '';
    }
    totalsc += 1;
    random();
}

function checkop() {
    if (showop.innerHTML == "+") {
        total = number1 + number2;
    } else if (showop.innerHTML == "-") {
        total = number1 - number2;
    } else if (showop.innerHTML == "×") {
        total = number1 * number2;
    } else if (showop.innerHTML == "÷") {
        total = number1 / number2;
    }
}

function radioop(value) {
    showop.innerHTML = value;
}

random();

