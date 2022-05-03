'use strict';

let score = 0;
let fout = 0;
let leftNumber;
let rightNumber;

let operator = Math.trunc(Math.random() * 4) + 1;
let operatorSwitch;
let answer;

// Answer
const answerF = function () {
    if (operatorSwitch === "+") {
        answer = leftNumber + rightNumber;
    } else if (operatorSwitch === "-") {
        answer = leftNumber - rightNumber;
    } else if (operatorSwitch === "/") {
        answer = leftNumber / rightNumber;
    } else if (operatorSwitch === "*") {
        answer = leftNumber * rightNumber;
    }
}

// Random operator 
switch (operator) {
    case 1: operatorSwitch = "+";
        break;
    case 2: operatorSwitch = "-";
        break;
    case 3: operatorSwitch = "/";
        break;
    case 4: operatorSwitch = "*";
        break;
}

// Random numbers
const rNumbers = function () {
    if (operatorSwitch === "+") {
        leftNumber = Math.trunc(Math.random() * 100) + 1;
        rightNumber = Math.trunc(Math.random() * 100) + 1;
    } else if (operatorSwitch === "-") {
        leftNumber = Math.trunc(Math.random() * 100) + 1;
        rightNumber = Math.trunc(Math.random() * 99) + 1;
    } else if (operatorSwitch === "/") {
        leftNumber = Math.trunc(Math.random() * 10) + 1;
        rightNumber = Math.trunc(Math.random() * 2) + 1;
    } else if (operatorSwitch === "*") {
        leftNumber = Math.trunc(Math.random() * 10) + 1;
        rightNumber = Math.trunc(Math.random() * 10) + 1;
    }
}

rNumbers();

document.querySelector('.n-right-number').textContent = rightNumber;
document.querySelector('.n-left-number').textContent = leftNumber;
document.querySelector('.ope').textContent = operatorSwitch;

document.querySelector('.check')
.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    answerF();

    if (guess === answer) {

        score = score + 1;
        operator = Math.trunc(Math.random() * 4) + 1;

        switch (operator) {
            case 1: operatorSwitch = "+";
                break;
            case 2: operatorSwitch = "-";
                break;
            case 3: operatorSwitch = "/";
                break;
            case 4: operatorSwitch = "*";
                break;
        }

        answerF();
        rNumbers();

        document.querySelector('.n-score').textContent = score;

        document.querySelector('.guess').value = '';
        document.querySelector('.guess').style.backgroundColor = 'white';

        document.querySelector('.n-right-number').textContent = rightNumber;
        document.querySelector('.n-left-number').textContent = leftNumber;
        document.querySelector('.ope').textContent = operatorSwitch;

        document.querySelector('.goed').textContent = score;

        if (score === 11) {
            document.querySelector('.modal').classList.remove('hidden');
            document.querySelector('.overlay').classList.remove('hidden');
            document.querySelector('.button').classList.remove('hidden');
        }

    } else if (guess !== answer) {

        fout = fout + 1;

        document.querySelector('.guess').value = '';
        document.querySelector('.guess').style.backgroundColor = 'red';

        document.querySelector('.fouten').textContent = fout;
    }

    console.log(`Normaal score: ${score} fouten ${fout}`);

})

document.querySelector('.button')
.addEventListener('click', function () {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.button').classList.add('hidden');

    score = 0;
    fout = 0;

    document.querySelector('.n-score').textContent = score;
    document.querySelector('.goed').textContent = score;
    document.querySelector('.fouten').textContent = fout;

    console.log(`Na de button score: ${score} fouten ${fout}`);
})



