'use strict';
document.querySelector('.item-1').style.backgroundColor = 'pink';
document.querySelector('.item-1').style.width = '50%';

document.querySelector('.item-1').addEventListener('click', function() {
    document.querySelector('.item-1').style.width = '100%';
})
