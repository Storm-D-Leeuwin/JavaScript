'use strict';

let container = document.querySelector('.container');
let nummer = 0;

let array = [];

for (let i = 0; i < 50; i++) {
    let j = Math.floor(Math.random() * 900 + 100);
    array.push(j);
}

document.querySelector('.button').addEventListener('click', () => {

    if (nummer < 49) {
        for (let k = 0; k < 49; k++) {
        nummer++;
        let div = document.createElement('div');
        div.classList.add('container__item');
        div.innerHTML = array[k];
        container.appendChild(div);
        }
    }

    console.log(document.getElementsByTagName('div'));
})



