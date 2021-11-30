// alert ('ciao');
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati

const nameList = [
    'Mario',
    'Gino',
    'Franco',
    'Marco',
    'Fabio',
    'Fulvio',
    'Francesco'
];
const surnameList = [
    'Rossi',
    'Bianchi',
    'Verdi',
    'Gialli',
    'Marroni',
    'Viola',
    'Blu'
];

const fakeList = [];

// ciclo for per creare 20 nomi casuali da mettere in un array vuoto dichiarato sopra.
for (let index = 20; index > 0; index--) {
    let randomNumber = (Math.floor((Math.random() * 6)));
    let randomName = nameList[randomNumber];
    let randomNumberSecond = (Math.floor((Math.random() * 6)));
    let randomSurname = surnameList[randomNumberSecond];
    let fakeItem = randomName + ' ' + randomSurname;    
    fakeList.push(fakeItem);
    console.log(fakeList);
}

