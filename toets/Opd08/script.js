'use strict';

let array = [];

for (let i = 0; i < 50; i++) {
    let j = Math.floor(Math.random() * 900 + 100);
    array.push(j);
}

console.log(array)