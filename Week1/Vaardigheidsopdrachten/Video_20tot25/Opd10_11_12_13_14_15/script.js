//Opdracht 10

let sofieGemiddelde = (9.4 + 3.8 + 2.7 + 6.7 + 8.9) / 5;
console.log(`Opdracht 10: ${sofieGemiddelde}`);

//Opdracht 11

let sofieGemiddelde2 = (9.4 + 3.8 + 2.7 + 6.7 + (8.9 * 2)) / 6;
console.log(`Opdracht 11: ${sofieGemiddelde2}`);

//Opdracht 12

let sarahGemiddelde = (7.7 + 7.6 + 7.3 + 5.8 + 6.9) / 5;
console.log(`Opdracht 12: ${sarahGemiddelde}`);

//Opdracht 13

const sofieEen = 9.4;
const sofieTwee = 3.8;
const sofieDrie = 2.7;
const sofieVier = 6.7;
const sofieVijf = 8.9;

const sarahEen = 7.7;
const sarahTwee = 7.6;
const sarahDrie = 7.3;
const sarahVier = 5.8;
const sarahVijf = 6.9;

if (sofieEen > sarahEen) {
    console.log(`Opdracht 13: Sofie ${sofieEen}`);
} else if (sarahEen > sofieEen) {
    console.log(`Opdracht 13: Sarah ${sarahEen}`);
}

//Opdracht 14

if (sarahGemiddelde > sofieGemiddelde) {
    console.log(`Opdracht 14: Sarah ${sarahGemiddelde}`);
} else if (sofieGemiddelde > sarahGemiddelde) {
    console.log(`Opdracht 14: Sofie ${sofieGemiddelde}`);
}

//Opdracht 15

if (sarahGemiddelde > sofieGemiddelde && sarahGemiddelde >= 7) {
    console.log(`Opdracht 15: Goed gedaan Sarah, hoger dan een 7`);
} else if (sofieGemiddelde > sarahGemiddelde && sofieGemiddelde >= 7) {
    console.log(`Opdracht 15: Goed gedaan Sofie, hoger dan een 7`);
}