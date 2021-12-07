class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        if (!this.priceForCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.some(p => p.name === name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });

        return `The ${name} was successfully registered.`;

    }

    unregisterParticipant(name) {

        if (!this.listOfParticipants.some(p => p.name === name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        const participant = this.listOfParticipants.find(p => p.name === name);
        const index = this.listOfParticipants.indexOf(participant);
        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`;

    }

    timeToPlay(typeOfGame, ...participant) {

        if (typeOfGame === 'Battleship') {
            const player = this.listOfParticipants.find(p => p.name == participant[0]);

            if (player == undefined) {
                throw new Error('Invalid entered name/s.');
            }

            player.power += 20;
            return `The ${player.name} successfully completed the game ${typeOfGame}.`;


        } else if (typeOfGame === 'WaterBalloonFights') {
            const player1 = this.listOfParticipants.find(p => p.name == participant[0]);
            const player2 = this.listOfParticipants.find(p => p.name == participant[1]);

            if (player1 === undefined || player2 === undefined) {
                throw new Error('Invalid entered name/s.');
            }

            if (player1.condition !== player2.condition) {
                throw new Error('Choose players with equal condition.');
            }

            if (player1.power > player2.power) {
                player1.wins += 1;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`

            } else if (player2.power > player1.power) {
                player2.wins += 1;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`

            } else {
                return 'There is no winner.';

            }
        }

    }

    toString() {

        const reuslt = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
            .forEach(s => reuslt.push(`${s.name} - ${s.condition} - ${s.power} - ${s.wins}`));

        return reuslt.join('\n');

    }

}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));

// //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Pet", "Met"));

// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));





// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// //console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
