const birthYear = [1988, 1982, 1988, 1988, 1922, 1990, 2000, 2020, 2033, 2001];

for(let i = 0; i < birthYear.length; i++){
        const calcAge = function (birthYear) {
            
            let age = 2022 - birthYear;

                if (age < 0) {
                    age = 'Nog niet geboren';
                }

            return age; 
        }

    console.log(calcAge(birthYear[i]));

}

