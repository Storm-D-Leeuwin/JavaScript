'use strict';

const div = document.querySelectorAll('.item');

for (let i = 0; i < 3; i++){
div[i].addEventListener('click', function () {
   console.log('Geklikt'); 
})
}