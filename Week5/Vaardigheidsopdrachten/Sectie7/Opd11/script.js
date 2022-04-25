'use strict';

document.querySelector('div').style.height = 'min-content';
document.querySelector('div').style.textAlign = 'center';
document.querySelector('body').style.margin = '0';
document.querySelector('body').style.padding = '0';

const d = document.querySelector('.item-1');

d.textContent = 'Konijntje 0';
d.style.backgroundColor = 'red';

const e = document.querySelector('.item-2');

e.textContent = 'Konijntje 1';
e.style.backgroundColor = 'blue';

const f = document.querySelector('.item-3');

f.textContent = 'Konijntje 4';
f.style.backgroundColor = 'green';

const g = document.querySelector('.item-4');

g.textContent = 'Konijntje 9';
g.style.backgroundColor = 'purple';

const h = document.querySelector('.item-5');

h.textContent = 'Konijntje 16';
h.style.backgroundColor = 'brown';

const i = document.querySelector('.item-6');

i.textContent = 'Konijntje 25';
i.style.backgroundColor = 'pink';

const j = document.querySelector('.item-7');

j.textContent = 'Konijntje 36';
j.style.backgroundColor = 'yellow';

document.querySelector('.item-1').addEventListener('click', function() {
    console.log('Hello World');
})