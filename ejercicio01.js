/**
 * Diseñar un objeto denominado "factura".
 * Este objeto deberá tener las siguientes propiedades:
 * 
 *    - Número de factura
 *    - Nombre de Cliente
 *    - Dirección Cliente
 *    - Fecha
 *    - Estado
 * 
 * Las propiedades son de tipo "string". El campo estado deben ser: 
 * "Creado", "Borrador","Pagado".
 * Nota: Para este ejemplo no hace falta que se valide la fecha. 
 * 
 * La factura pruede tener varios items.
 * Cada item tiene las siguentes característica: 
 *    - Cantidad
 *    - Artículo
 *    - Precio Unitario
 * 
 * Se necesita crear una función que reciba 2 parámetros
 * 1 parámetro es el objeto "Factura" y el otro parámetro es el "Estado".
 * La función debe imprima en pantalla la información de la factura
 * con el detalle de items. Mostrando por cada Item el total (total = cantidad * precio unitario)
 * y si la cantidad es mayor o igual a 5 entonces tiene un descuento del 10%
 * 
 * También se deberá mostrar el monto total de la factura.
 * 
 * Finalmente, Imprimir un mensaje según el estado:
 * 
 * Si el estado es "Creado" entonces imprimir "La factura está en estado 'Creado' falta que se registre el pago."
 * Si el estado es "Borrador" entonces imprimir "La factura está en proceso de registro."
 * Si el estado es "Pagado" entonces imprimir "Proceso completo, gracias por su pago."
 * 
 *  */ 

const descuento = 10; //Porcentaje descuento

const factura = {
    numero: "01-001", 
    cliente: "Thaís Alvim",
    direccion: "Tierra del Fuego",
    fecha: "29/01/2025",
    caracteristicas: [
        {cantidad:5, articulo:"Impressora", precioUnitario: 120},
        {cantidad:20, articulo:"Teclado", precioUnitario: 20},
        {cantidad:20, articulo:"Monitor", precioUnitario: 250},
    ]
}
    //estado: ["Creado", "Borrador","Pagado"]

function obtenerDescuento (precio,porcentaje){   

    let descuento = (precio * porcentaje)/100;
    return descuento;
}

function imprimirFactura(objFactura,estado){
    console.log ("Número de la factura = ", objFactura.numero);
    //console.log ("Número de la factura = " + objFactura.numero); - Otra forma de imprimir en la pantalla
    //console.log (`Número de la factura = ${objFactura.numero}`); - Otra Forma de imprimir en la pantalla
    console.log ("Nombre de Cliente = ", objFactura.cliente);
    console.log ("Dirección de Cliente = ", objFactura.direccion);
    console.log ("Fecha = ", objFactura.fecha);

    let items = objFactura.caracteristicas;
    for (let i=0; i<items.length; i++){

        if (items[i].cantidad >=5)
        {
            items[i].descuento = obtenerDescuento(items[i].precioUnitario, 10);
        }
        else 
            items[i].descuento = 0;
            
        items[i].total = (items[i].cantidad * (items[i].precioUnitario - items[i].descuento));

        //console.log (items[i].cantidad + " | " + items[i].articulo + " | " + items[i].precioUnitario + " | " + items[i].descuento + " | " + items[i].total);
}

    console.table(items); //Imprime en formato de tabla

}

imprimirFactura(factura,"Creado")
