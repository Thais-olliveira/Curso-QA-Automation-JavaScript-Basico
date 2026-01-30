const paises = ["Colombia", "México", "Argentina", "Perú"];

console.log("Listado Original");
console.table(paises);

console.log("Método.push()");//Agrega un nuevo elemento al fin
console.table(paises);
paises.push("Brasil"); 

console.log("Método.unshift()");//Agrega un nuevo elemento al inicio
paises.unshift("Ecuador"); 
console.table(paises);

console.log("Método.shift()");//Elimina al inicio de la lista
let eliminado = paises.shift(); 
console.log ("Pais Eliminado: ", eliminado) //Cual pais fue eliminado
console.table(paises);

console.log("Método.pop()");//Elimina al fin de la lista
eliminado = paises.pop(); 
console.log ("Pais Eliminado: ", eliminado) //Cual pais fue eliminado
console.table(paises);

console.log("Método.sort()");//Ordena los elementos en orden alfabetica
paises.sort();
console.table(paises);