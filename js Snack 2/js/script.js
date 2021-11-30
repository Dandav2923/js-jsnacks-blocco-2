// alert ('Ciao');
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// Creo array vuoto
let numbers = []

// Genero numeri random e li inserisco nell'array
i = 0;
do {
    let randNumb = Math.floor(Math.random() * 11);
    numbers.push(randNumb);
    i++;
} while (i < 10);
console.log(numbers);

// Faccio la somma
let sum = 0;
for (let index = 1; index < numbers.length; index += 2) {
    sum += numbers[index];
}
console.log(sum);