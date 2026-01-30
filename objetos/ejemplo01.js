//Como definir um objeto - JSON (Java script object notation)
const automovil = {
    marca: "Ferrari", 
    color: "Rojo",
    placa: "PDJ0785",
    modelo: "GT4",
    kilometraje: 1500,
    esNuevo: false,
    radio: {marca:"Sony", soportaAndroidAuto:true, soportaAppleCar:true, tamañoPantalla:"7"},
    adicionales: ["Cámara", "Kit herramientas", "Sensor de Distancia"] //Tipo Array
}
automovil.kilometraje = 1600; 
//console.log(automovil);

automovil.cilindraje = 2500;
//delete automovil.cilindraje (Borrar propriedades)

//const auto2={...automovil}; //importante para alterar apenas os valor para auto2
const auto2 =  Object.assign({}, automovil); //Otra forma de copiar los datos del automovil
auto2.marca = "Mercedes";
auto2.kilometraje = 50;

console.log ("Automovil 1");
console.log ("---------------------------------");
console.log ("Marca = " + automovil.marca);
console.log ("Kilometraje = " + automovil.kilometraje);
console.log ("Cilindraje = " + automovil.cilindraje);
console.log ("Rádio Marca = " + automovil.radio.marca);
console.log ("Adicional 1 = " + automovil.adicionales[0]);
console.log ("---------------------------------");

console.log ("Automovil 2");
console.log ("---------------------------------");
console.log ("Marca = " + auto2.marca);
console.log ("Kilometraje = " + auto2.kilometraje);
console.log ("Cilindraje = " + auto2.cilindraje);
console.log ("Rádio Marca = " + auto2.radio.marca);
console.log ("Adicional 1 = " + auto2.adicionales[0]);
console.log ("---------------------------------");