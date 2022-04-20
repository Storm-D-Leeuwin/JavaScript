const objectOne = {
    firstName: 'Piet',
    lastName: 'Janssens',
    job: 'Fighter',
    getJobAndName: function() {
        console.log(`My name is ${this.firstName} ${this.lastName} and I am a ${this.job}`);
    }
};

objectOne.getJobAndName();

