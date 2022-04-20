const objectOne = {
    naam: 'Storm',
    leeftijd: 16,
    geboortejaar: 2005,
    baan: 'geen',
    woonplaats: 'Almere'
};

const objectTwo = {
    naam: 'Rick',
    leeftijd: 50,
    geboortejaar: 1974,
    baan: 'leraar',
    woonplaats: 'Zwolle'
};

function object () {
    console.log(`Storm is ${objectOne.leeftijd} jaar oud. Rick is ${objectTwo.leeftijd}`);
};

function naam () {
    console.log(`${objectOne.leeftijd < objectTwo.leeftijd ? 'Rick' : 'Storm'} is ouder`)
};

function almere () {
    if (objectOne.woonplaats === 'Almere' && objectTwo.woonplaats === 'Almere') {
        console.log('Ze wonen beide in Almere');
    } else if (objectOne.woonplaats === 'Almere') {
        console.log('Alleen Storm woont in Almere');
    } else if (objectTwo.woonplaats === 'Almere') {
        console.log('Alleen Rick woont in Almere');
    }
}

object();
naam();
almere();