//* Crea un array vuoto e chiedi all’utente un numero
//* da inserire nell’array.Continua a chiedere i numeri
//* all’utente e a inserirli nell’array fino a quando
// * a somma degli elementi è minore di 50.

let numbers = [];
let sum = 0;
while (sum <= 50) {
    let numbersUser = parseInt(prompt('inserisci un numero'));
    console.log(numbersUser);
    sum +=  numbersUser;
    if (sum > 50){
        console.log('La somma dei numeri inseriti è maggiore di 50');
    } 
    else {
        numbers.push(numbersUser);
    }
}
console.log(numbers);