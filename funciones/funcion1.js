/**Function Declarativa

*/ 

function sumar (num1,num2)
{
    let resultado = num1 + num2;
    return resultado;
}

function calcular(operacion, num1, num2)
{
    return operacion(num1,num2) //La operación es una función que recibe dos numeros
}

/**Función como una expressión
 * Expressión función / Puedo ejecutar la const para ejecutar mi funcion
*/ 
const miSuma = function (num1,num2)
{
    let resultado = num1 + num2;
    return resultado;
}

const miResta = function (num1,num2)
{
    let resultado = num1 - num2;
    return resultado;
}

/**Arrow Function
*/ 
const flechaSuma = (num1,num2) => num1 + num2;

/* Ejecutión
*/ 
let respuestaSuma = sumar (2,5);
console.log("Respuesta de la suma:", respuestaSuma)

let respuestaMisuma = miSuma (2,8);
console.log("Respuesta de la suma:", respuestaMisuma)

let respuestaFlechasuma = flechaSuma(15,10);
console.log("Respuesta de la suma:", respuestaFlechasuma)

let respuestaDeCalculo = calcular(flechaSuma,20,10);
console.log("Respuesta de la suma:", respuestaDeCalculo);
respuestaDeCalculo = calcular(miResta,20,10);
console.log("Respuesta de la suma:", respuestaDeCalculo)