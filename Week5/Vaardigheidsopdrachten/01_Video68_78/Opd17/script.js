'use strict';

const foto = [
    "./img/tijger1.jpg",
    "./img/tijger2.jpg",
    "./img/tijger3.jpg",
    "./img/tijger4.jpg",
    "./img/tijger5.jpg",
    "./img/tijger6.jpg",
    "./img/tijger7.jpg",
    "./img/tijger8.jpg",
    "./img/tijger9.jpg",
    "./img/tijger10.jpg"
];

let nummer = 0;

document.querySelector('.klik').addEventListener('click', function() {
    nummer = Math.trunc(Math.random() * 10);
    document.querySelector('.foto').src = foto[nummer];
})