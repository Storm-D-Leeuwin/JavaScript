'use strict';

let container = document.querySelector('.container');
let nummer = 0;

document.querySelector('.button').addEventListener('click', () => {

    if (nummer < 49) {
        for (let k = 0; k < 49; k++) {
        nummer++;
        let div = document.createElement('div');
        div.classList.add('container__item');
        div.innerHTML = nummer;
        container.appendChild(div);
        }
    }


})