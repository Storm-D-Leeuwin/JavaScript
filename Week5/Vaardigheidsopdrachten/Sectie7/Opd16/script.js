'use strict';

let nEen = 0;
let nTwee = 1;

document.querySelector('.klik-1').addEventListener('click', function() {
    nEen = nEen + nTwee * nTwee;
    nTwee++;
    
    document.querySelector('.nummer-nul').textContent = nEen;
})