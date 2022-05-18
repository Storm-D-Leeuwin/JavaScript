'use strict';

let container = document.querySelector('.container');
let nummer = 0;

document.querySelector('.button').addEventListener('click', () => {

    if (nummer < 49) {
        nummer++;
        let div = document.createElement('div');
        div.classList.add('container__item');
        div.innerHTML = nummer;
        container.appendChild(div);
    }


})