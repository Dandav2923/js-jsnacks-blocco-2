// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].

let arrayLetter = ['a','b','c'];
let arrayNumber = ['1','2','3'];
let arrayFusion = [];

// dobbiamo girare sulla lunghezza dell'array e selezionare gli elementi uno ad uno e pusharli nel nuovo array.

function fusion(array1, array2, array3) {
    for (let index = 0; index < array1.length; index++) {
        const element = array1[index];
        const element2 = array2[index];
        array3.push(element,element2);
    }
    return array3;
}
// for (let index = 0; index < arrayLetter.length; index++) {
//     const element = arrayLetter[index];
//     const secondElement = arrayNumber[index];
//     arrayFusion.push(element, secondElement);   
// }
// console.log(arrayFusion);
let array = fusion(arrayLetter, arrayNumber, arrayFusion);
console.log(array);