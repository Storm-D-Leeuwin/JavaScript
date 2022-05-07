'use strict';

//Random getallen
let antwoord = Math.trunc(Math.random() * 50 + 10);
let optelSom = 0;

let hoeveel = 0;

let cijferEen = Math.trunc(Math.random() * 20 + 1);
let cijferTwee = Math.trunc(Math.random() * 20 + 1);
let cijferDrie = Math.trunc(Math.random() * 20 + 1);
let cijferVier = Math.trunc(Math.random() * 20 + 1);
let cijferVijf = Math.trunc(Math.random() * 20 + 1);
let cijferZes = Math.trunc(Math.random() * 20 + 1);
let cijferZeven = Math.trunc(Math.random() * 20 + 1);
let cijferAcht = Math.trunc(Math.random() * 20 + 1);

//Text Content
document.querySelector('.divOne').textContent = antwoord;
document.querySelector('.div1').textContent = cijferEen;
document.querySelector('.div2').textContent = cijferTwee;
document.querySelector('.div3').textContent = cijferDrie;
document.querySelector('.div4').textContent = cijferVier;
document.querySelector('.div5').textContent = cijferVijf;
document.querySelector('.div6').textContent = cijferZes;
document.querySelector('.div7').textContent = cijferZeven;
document.querySelector('.div8').textContent = cijferAcht;
document.querySelector('.som').textContent = optelSom;

//Functies
document.querySelector('.div1')
.addEventListener('click', function () {
    document.querySelector('.div1').textContent = '-';

    optelSom = optelSom + cijferEen;
    console.log(optelSom);
    document.querySelector('.som').textContent = optelSom;

    return optelSom;
});

document.querySelector('.div2')
.addEventListener('click', function () {
    document.querySelector('.div2').textContent = '-';

    optelSom = optelSom + cijferTwee;
    console.log(optelSom);
    document.querySelector('.som').textContent = optelSom;

    return optelSom;
});

document.querySelector('.div3')
.addEventListener('click', function () {
    document.querySelector('.div3').textContent = '-';

    optelSom = optelSom + cijferDrie;
    console.log(optelSom);
    document.querySelector('.som').textContent = optelSom;

    return optelSom;
});

document.querySelector('.div4')
.addEventListener('click', function () {
    document.querySelector('.div4').textContent = '-';

    optelSom = optelSom + cijferVier;
    console.log(optelSom);
    document.querySelector('.som').textContent = optelSom;

    return optelSom;
});

document.querySelector('.div5')
.addEventListener('click', function () {
    document.querySelector('.div5').textContent = '-';

    optelSom = optelSom + cijferVijf;
    console.log(optelSom);
    document.querySelector('.som').textContent = optelSom;

    return optelSom;
});

document.querySelector('.div6')
.addEventListener('click', function () {
    document.querySelector('.div6').textContent = '-';

    optelSom = optelSom + cijferZes;
    console.log(optelSom);
    document.querySelector('.som').textContent = optelSom;

    return optelSom;
});

document.querySelector('.div7')
.addEventListener('click', function () {
    document.querySelector('.div7').textContent = '-';

    optelSom = optelSom + cijferZeven;
    console.log(optelSom);
    document.querySelector('.som').textContent = optelSom;

    return optelSom;
});

document.querySelector('.div8')
.addEventListener('click', function () {
    document.querySelector('.div8').textContent = '-';

    optelSom = optelSom + cijferAcht;
    console.log(optelSom);
    document.querySelector('.som').textContent = optelSom;

    return optelSom;
});

document.querySelector('.Done').addEventListener('click', function () {
    if (optelSom === antwoord) {
        hoeveel = hoeveel + 1;
        document.querySelector('.hoeveel').textContent = hoeveel;

        optelSom = 0;
        document.querySelector('.som').textContent = optelSom;

        antwoord = Math.trunc(Math.random() * 50 + 10);

        cijferEen = Math.trunc(Math.random() * 20 + 1);
        cijferTwee = Math.trunc(Math.random() * 20 + 1);
        cijferDrie = Math.trunc(Math.random() * 20 + 1);
        cijferVier = Math.trunc(Math.random() * 20 + 1);
        cijferVijf = Math.trunc(Math.random() * 20 + 1);
        cijferZes = Math.trunc(Math.random() * 20 + 1);
        cijferZeven = Math.trunc(Math.random() * 20 + 1);
        cijferAcht = Math.trunc(Math.random() * 20 + 1);

        document.querySelector('.divOne').textContent = antwoord;
        document.querySelector('.div1').textContent = cijferEen;
        document.querySelector('.div2').textContent = cijferTwee;
        document.querySelector('.div3').textContent = cijferDrie;
        document.querySelector('.div4').textContent = cijferVier;
        document.querySelector('.div5').textContent = cijferVijf;
        document.querySelector('.div6').textContent = cijferZes;
        document.querySelector('.div7').textContent = cijferZeven;
        document.querySelector('.div8').textContent = cijferAcht;
    }
})

document.querySelector('.notDone')
.addEventListener('click', function () {
    antwoord = Math.trunc(Math.random() * 50 + 10);

    cijferEen = Math.trunc(Math.random() * 20 + 1);
    cijferTwee = Math.trunc(Math.random() * 20 + 1);
    cijferDrie = Math.trunc(Math.random() * 20 + 1);
    cijferVier = Math.trunc(Math.random() * 20 + 1);
    cijferVijf = Math.trunc(Math.random() * 20 + 1);
    cijferZes = Math.trunc(Math.random() * 20 + 1);
    cijferZeven = Math.trunc(Math.random() * 20 + 1);
    cijferAcht = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('.divOne').textContent = antwoord;
    document.querySelector('.div1').textContent = cijferEen;
    document.querySelector('.div2').textContent = cijferTwee;
    document.querySelector('.div3').textContent = cijferDrie;
    document.querySelector('.div4').textContent = cijferVier;
    document.querySelector('.div5').textContent = cijferVijf;
    document.querySelector('.div6').textContent = cijferZes;
    document.querySelector('.div7').textContent = cijferZeven;
    document.querySelector('.div8').textContent = cijferAcht;

    optelSom = 0;
    document.querySelector('.som').textContent = optelSom;
})