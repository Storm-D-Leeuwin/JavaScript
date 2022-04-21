const arrayOne = ['1', '2', '3'];
const arrayTwo = ['4', '5'];

for (let i = 0; i < arrayOne.length; i++) {
    for(let j = 0; j < arrayTwo.length; j++){
        console.log(arrayOne[i] + arrayTwo[j]);
    }
}