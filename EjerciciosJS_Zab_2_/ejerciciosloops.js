// const arr = [1,2,3,4,5];
// const arr2 = [1, -563, 999, 0 , -1, -999];

// Encontrar el numero mas grande
// Encontrar el numero mas pequeño
// Encontrar el numero mas grande y el mas pequeño
// -> [10, -9];


// Dado un numero, regresar el mismo numero divido en sus mitades dentro de un array
// numDiv(4) -> [2, 2];
// nuvDiv(10) -> [5, 5];
// numDiv(100) -> [50,50];


const numDiv = (x) => {
    x = x / 2;
    const arrayDiv = [x , x];
    console.log(arrayDiv);
}
numDiv(10);

// Encontrar la suma de todos los resistores conectados en serie
// sumResistance([1, 5, 6, 3]) -> "15 ohms"
// sumResitance([14,3.5,6]) -> "25.5 ohms"
// Ohms >= 1

/* const sumResistance = (resistencias) => {
    let sumaRes = 0;
    for (let i = 0; i >= (resistencias.lenght); i++) {
        sumaRes + resistencias[i];
    }
    return sumaRes;
}

console.log(sumResistance(5,4,3,5));
console.log(resistencias.lenght); */

/* const sumResistance = (resistencias) => {
    console.log(resistencias.lenght);
}

sumResistance([5,4,3,5]); */

console.log("-----------");
console.log(" Ejercicio Sociedad Secreta ");


// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante.

/* 

["Felipe", "Fer", "Zabdiel"]

['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']

['Harry', 'Ron', 'Hermione'] 

*/

const names = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const newNameArr = [];

names.forEach((elemento) => {
    newNameArr.push(elemento.toString().slice(0,1));

});

console.log(newNameArr.toString().toUpperCase().replace(/,/g, ""));


/* const secretName = names.map(elemento => {
    
}); */


// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'


// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]


// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false



// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

/* Mostrar la tabla del 5 */
for (let i = 0; i < 5; i++) {
    console.log('5 x ${i}');
}

let i = 0;
let text = "5 x ${i}";