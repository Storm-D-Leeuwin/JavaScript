//Opdracht 6

regen = true;

if(regen){
    console.log("Ik neem een paraplu mee naar buiten.");
}

//Opdracht 7

regen = false;
zon=false;

if (regen) {
    console.log("Ik neem een paraplu mee naar buiten.");
} else if (zon) {
    console.log("Ik neem mijn zonnebril mee");
} else {
    console.log("Ik ben mijn goede humeur naar buiten.");
}

//Opdracht 8

regen = false;
zon = true;

if (regen) {
    console.log("Ik neem een paraplu mee naar buiten.");
} else if (zon) {
    console.log("Ik neem mijn zonnebril mee");
}

//Opdracht 9

dag = "Vrijdag";

if (dag == "Maandag") {
    console.log("Ik ga kickboksen")
} else if (dag == "Dinsdag") {
    console.log("Ik ga boksen");
} else if (dag == "Donderdag" || "Vrijdag") {
    console.log("Ik ga BJJ'en");
} else {
    console.log("Ik ga patat halen");
}