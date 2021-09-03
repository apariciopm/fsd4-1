/*
Escriba un programa para verificar un entero dado y devolver verdadero si está dentro el rango del número
se encuentra entre 100 o 200.
let numero = prompt("Introduce un número entero");
if (n >= 100 && n <= 200)
*/

/* 
Desarrolle un algoritmo que permita leer tres valores y almacenarlos en las variables A, B y C
respectivamente. El algoritmo debe imprimir cual es el mayor y cual es el menor. 
Recuerde constatar que los tres valores introducidos por el teclado sean valores distintos. 
Presente un mensaje de alerta en caso de que se detecte la introducción de valores iguales.
*/

const mayor = function (a, b, c) {
  let aux = a;
  aux = 10;
  // 5 > 1 ? Sí

  if (b > aux) {
    aux = b;
  }
  // aux = 15

  if (c > aux) {
    aux = c;
  }

  return aux;
};

console.log(mayor(10, 15, 50));
console.log(mayor(15, 100, 10));

console.log(mayor(500, 1, 3));

/*
Desarrolle un algoritmo que realice la
 sumatoria de los números enteros 
 comprendidos entre el 1 y el 10,
es decir, 1 + 2 + 3 + …. + 10.
 */

/*
Escriba un programa para calcular la suma de los dos valores enteros dados. 
Si los dos valores son iguales, devuelve el triple de su suma */

/* 1
Crear un programa que permita al usuario elegir un candidato por el cual votar. 
Las posibilidades son: candidato A por el partido rojo, candidato B por el partido verde, 
candidato C por el partido azul. 
Según el candidato elegido (A, B ó C) se le debe imprimir el mensaje 
“Usted ha votado por el partido [color que corresponda al candidato elegido]”. 
Si el usuario ingresa una opción que no corresponde a ninguno de los candidatos disponibles, indicar “Opción errónea”.*/

/* 2
Hacer un programa que permita saber si un año es bisiesto. 
Para que un año sea bisiesto debe ser divisible por 4 y no debe ser divisible por 100, excepto que también sea divisible por 400.
*/

/* 3
Solicitar al usuario un número. Imprimer en pantalla hasta que el número sea menor a 20".
 */

/* 4 
Escribir una funcion que realize la tabla de multiplicar de cualquier número del 1 al 9
 */

/* 5
Escribir una funcion que retorne la suma de los primeros  5 numeros positivos*/

/* 6
    Solicitar al usuario que ingrese un numero hasta que ese sea superarior a 100
*/

/* 7
Retornar la suma de todos los elementos de un array numerico
*/
