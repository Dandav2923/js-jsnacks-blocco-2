// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let zucchini = [
    {
        varietà: 'lunga',
        peso: 3,
        lunghezza: 50
    },
    {
        varietà: 'lunga',
        peso: 1,
        lunghezza: 10
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
        lunghezza: 10
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
        lunghezza: 10
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
let array15 = [];
let array16 = [];

for (let index = 0; index < zucchini.length; index++) {
    let element = zucchini[index];
    if (element.lunghezza <=15) {
        array15.push(element.lunghezza);
    }else {
        array16.push(element.lunghezza);
    }
    
}
console.log(array15);
console.log(array16);

let sum = 0;
for (let index = 0; index < array15.length; index ++) {
    sum += array15[index];
}
console.log(sum);
let sum2 = 0;
for (let index = 0; index < array16.length; index ++) {
    sum2 += array16[index];
}
console.log(sum2);