function nOne (een) {
    return een * 3;
}

function ntwo (twee) {
    return twee * 4;
}

function doMath (x,y) {
    const numberOne = nOne(x);
    const numberTwo = ntwo(y);
    return numberOne + numberTwo;
}

console.log(doMath(1,1));

