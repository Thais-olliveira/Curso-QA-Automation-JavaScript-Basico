/**https://profile.w3schools.com/signup
 * Ejemplo de un preenchimento automatico de formulario
 * Copiar una parte del link y en el console (Ctrl F) verificar se la parte es unicas en el código y 
 * borrar el restante, para diminuir o tamanho do link.
 *  *  */ 

//Elementos del Formulario de registro - Site W3School

var txtEmail = document.querySelector("form > div.SignUpForm_signup_inputs__9QGV9 > input:nth-child(1)");
var txtPassword = document.querySelector("form > div.SignUpForm_signup_inputs__9QGV9 > input:nth-child(2)");
var txtNombre = document.querySelector("form > div.SignUpForm_signup_inputs__9QGV9 > input:nth-child(3)");
var txtApellido = document.querySelector("form > div.SignUpForm_signup_inputs__9QGV9 > input:nth-child(4)");
var mensajeValidacion = document.querySelector(" form > div.SignUpForm_error_text__vt1BO")

var botonSign = document.querySelector("form > div.SignUpForm_signup_buttons__aoBad > button");

function llenarFormulario(email, password, nombre, apellido, casoDePrueba, resultadoEsperado) {
    
    /*
    txtEmail.value = email;
    txtPassword.value = password;
    txtNombre.value = nombre;
    txtApellido.value = apellido;
    */
    
    llenarTexto(txtEmail,email);
    llenarTexto(txtPassword,password);
    llenarTexto(txtNombre,nombre);
    llenarTexto(txtApellido,apellido);

    botonSign.click();

    if (mensajeValidacion.innerHTML==resultadoEsperado)
        console.log(casoDePrueba, "Exitoso");
        else
            console.log(casoDePrueba,"Fallido");
}

function llenarTexto(element, value) {
    let lastValue = element.value;
    element.value = value;
    let event = new Event("input",{
        target: element,
        bubbles: true
    });
    // React 15
    event.simulated = true;
    // React 16
    let tracker = element._valueTracker;
    if (tracker) {
        tracker.setValue(lastValue);
    }
    element.dispatchEvent(event);
}

//Set de Pruebas

function ejecutarTestFormuarioRegistro(){
    llenarFormulario("", "", "", "", "TC01-Campos Vacíos", "Please fill in all fields");
    llenarFormulario("prueba1234", "1234", "Thaís", "Alvim", "TC02- Formato Correo", "Please enter a valid email address");
    llenarFormulario("prueba1234@gmail.com", "1234", "Thaís", "Alvim", "TC03- Password Solo Numeros", "Password requires at least one lowercase character");
    llenarFormulario("prueba1234@gmail.com", "1234a", "Thaís", "Alvim", "TC04- Password sin letra mayúscula", "Password requires at least one uppercase character");
    llenarFormulario("prueba1234@gmail.com", "1234aB", "Thaís", "Alvim", "TC05- Password sin caracter especial", "Password requires at least one special character");
}

/**Validaciones
 * Si alguno de los campos están vacios mostrar mensaje: "Please fill in all fields"
 * Si el campo correo no tiene formato correcto: "Please enter a valid email addres"
 * Si el campo password es solo numeros: "Password requires at least one lowercase character"
 * Si el campo password es solo numeros y una maiscula: "Password requires at least one uppercase character"
 * Si el campo password es solo numeros una minuscula y una mayuscula y no tiene caracteres especiales:
 * "Password requires at least one special character"
 *  *  */ 
