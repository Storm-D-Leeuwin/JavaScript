const calcAge = function (birthyear) {
    const ageYears = 2022 - birthyear;
    const ageDays = (2022 - birthyear) * 365;

    console.log(`Jij bent: ${ageYears} jaar oud`);
    console.log(`Jij bent: ${ageDays} dagen oud`);
}

calcAge(2005);