/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* forEach, no acepta Break/Continue, percorre toda la lista, funciona solamente en array.
* for funciona en cualquier situacion y acepta break/continue, puede detener en el medio del array
 *  */ 

const array = ["a1", "b2", "c"];

array.forEach((element) => console.log(element));

let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Carlos", edad: 35 }
];

personas.forEach(function(persona) {
    console.log(persona.nombre);
    console.log(persona.edad);
});