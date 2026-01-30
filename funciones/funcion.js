/**
 * Función que obtiene el promedio de dos numeros
 * @param {*} num1 Es el primer numero
 * @param {*} num2 El segundo numero
 * @returns Retorna el promedio de los numeros
 */

function obtenerPromedio(num1, num2)
{   
    const divisor = 2;  //const:Constante
    let promedio = (num1+num2) / divisor;

    return promedio

}

let promedio1 = obtenerPromedio (10,12);
let promedio2 = obtenerPromedio (5,2);

console.log("El promedio es:" + promedio1);
console.log("El promedio es:" + promedio2);