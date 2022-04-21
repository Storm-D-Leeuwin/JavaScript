const arrayOne = [5,6,7,8,9,10,11,12,13,14,15];

let arrayTwo = [];

for(let i = 0; i < arrayOne.length; i++) {
    arrayTwo = [arrayOne[i] * 2];
    console.log(arrayTwo);
}

console.log(arrayOne);

const arrayThree = [];

for(let i = 0; i < arrayOne.length; i = i + 2) {
    const arrayThree = [arrayOne[i]]
    console.log(arrayThree);
}

for (let i = 0; i < arrayOne.length; i++) {
    console.log(arrayOne[i] + arrayOne.push[i * 2])
}
