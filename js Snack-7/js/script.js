// Partendo da questo array e aggiungiamo a  tutti gli elementi la proprieta age aggiungendo un numero casuale da 3 a 50.
// const arrayObj = [
//     { name: ‘Poppy’, type: ‘tshirt’, color: ‘red’},
// { name: ‘Jumping’, type: ‘occhiali’, color: ‘blue’ },
// { name: ‘CrissCross’, type: ‘scarpe’, color: ‘black’ },
// { name: ‘Jenny’, type: ‘borsa’, color: ‘pink’ },
// ];
// Poi stampiamo in pagina

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arrayObj = [
        { name: "Poppy", type: "tshirt", color: "red" },
        { name: "Jumping", type: "occhiali", color: "blue" },
        { name: "CrissCross", type: "scarpe", color: "black" },
        { name: "Jenny", type: "borsa", color: "pink" },
    ];


arrayObj.forEach(element => {
   element.age = getRndInteger(3,50);
});
console.log(arrayObj);