// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

let zucchini = [
    {
        varietà: 'lunga',
        peso: 3,
        lunghezza: 50
    },
    {
        varietà: 'lunga',
        peso: 1,
        lunghezza: 30
    },
    {
        varietà: 'lunga',
        peso: 2,
        lunghezza: 40
    },
    {
        varietà: 'lunga',
        peso: 3,
        lunghezza: 50
    },
    {
        varietà: 'lunga',
        peso: 1,
        lunghezza: 30
    },
    {
        varietà: 'lunga',
        peso: 2,
        lunghezza: 40
    }, {
        varietà: 'lunga',
        peso: 3,
        lunghezza: 50
    },
    {
        varietà: 'lunga',
        peso: 1,
        lunghezza: 30
    },
    {
        varietà: 'lunga',
        peso: 2,
        lunghezza: 40
    },
    {
        varietà: 'lunga',
        peso: 3,
        lunghezza: 50
    }
];

let somma = 0
// somma tra i pesi delle zucchini 
for (let index = 0; index < zucchini.length; index++) {
    const element = zucchini[index];
    somma += element.peso;  
}
console.log(somma);