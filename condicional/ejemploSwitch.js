const activo = 1;
const bloqueado = 2;
const eliminado = 3;

let estado = bloqueado;

switch (estado) {
    case activo:
        console.log ("Activo");
        break;
    case bloqueado:
        console.log ("Bloqueado");
        break
    case eliminado:
        console.log ("Eliminado");
        break
    default:
        console.log ("No identificado");
}