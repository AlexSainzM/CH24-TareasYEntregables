//Crear una función que verifique si un número es par o no 
// Parametros [Recibe el numero a verificar, devuelve en un String si es par o no]

/* Crear un programa para verificar la edad de un usuario, debe ser mayor a 18 para un resultado positivo */

/* reto 03 Hora y calendario */

/* var today = new Date();




var now = today.toLocaleString();
console.log(now); */

/* const today1 = () => {
    const now = today.toDateString();
    return now;
} */

//let diaHabil = new Date().getDay().toLocaleString(); 

let dia = 12;//new Date().getDate().toLocaleString();
let mes = 12;//new Date().getMonth().toLocaleString();

let feriadodia = [12,24,31];
let feriadomes = [12,12,12];


const esLaboral = (diaHabil) => {
    diaHabil = 0;//new Date().getDay().toLocaleString();
    if (diaHabil == 0 || diaHabil == 6){
        return false;
    } else {
        for (var i = 0; i < (feriadodia.length); i++ ) {
            if (feriadodia == dia && feriadomes == mes) {
                return false;
            } else {
                return true;
            }
        }
    }


}


console.log(esLaboral());



// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
// usar recurcion

//Ejercicio 05
// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

/* Escribir una funci[on para encontar el mayor común divisor de dos números positivos enteros */

/* Encontrar los primeros n elementos de la serie fibbonnacci */

/* Encontrar el número n de una figura pidamidal tringula  */

/* Crea una función que tome el nombre de un país y su área (nombre, a), debe regresar la proporcion del area del país acorde al area total global disponible */ 

/* Escribir una función que retorne 0 si 1 y viceversa. Sin utilizar condicionales, ternarios, negacionesni operadores bit  */

// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

