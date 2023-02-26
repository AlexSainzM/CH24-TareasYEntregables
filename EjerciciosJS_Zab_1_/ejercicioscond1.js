/* Crear una función que verifique si un número es par o no.
Parametros [Recibe el numero a verificar, devuelve en un String si es par o no]
 */
console.log("-----Ejercicio funcion es par -------");

const funcEsPar = b => {
    if ( b % 2 == 0) {
        console.log(`El número ${b} es par`);
    } else {
        console.log(`El número ${b} no es par`);
    }
}

funcEsPar(3);

console.log("-----Ejercicio funcion es par (usando return)-------");

const funcEsPar2 = x => {
    let y ="";
    if ( x % 2 == 0) {
        y = `El número ${x} es par`;
    } else {
        y = `El número ${x} no es par`;
    }
    return y;
}

console.log(funcEsPar2(3));

/* Crear un programa para verificar la edad de un usuario, debe ser mayor a 18 para un resultado positivo */

console.log("-----Ejercicio Edad de Usuario-------");

const edadUsuario = (a) => {
    let zy = "";
    if (a > 18) {
        zy = `Usuario mayor de edad: ${a} (permitido)`;
    } else {
        zy = `Usuario menor de edad: ${a} (prohibido)`;
    }
    return zy; 
}

console.log(edadUsuario(15));


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


//console.log(esLaboral());



/* Escribir una funcion que regrese la cantidad de valores true que hay en un array */

console.log("-----Cantidad de valores true en un array -------");

const arrConTrues = [true, true, true];
let valoresTrue = 0;

const contarValTrue = (x) => {
    for (let i = 0; i < ((arrConTrues.length)); i++) {
        if (arrConTrues[0] === true) {
            valoresTrue += 1;
        }
    }
    return valoresTrue;
}

console.log(contarValTrue(arrConTrues));

console.log("-----------------------------");

/* Ejercicio 05: Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
Usar recursion */

let maxDiv1 = 0;

const funcMaxDiv = (x) => {
    for (let i = 1; i < x; i++) {
        if ( x % i == 0) {
            maxDiv1 = i;
        }
    }    
    return maxDiv1;
}
    
console.log(funcMaxDiv(15));

/* Preguntar por este For

for (var i = 10; i > 5; i--) {
    console.log(i);
}
 */



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

