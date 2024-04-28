function validarCorreo() {
    var correo = document.getElementById("floatingPassword").value;
    var mensajeError = document.getElementById("mensajeErrorCorreo");

    if (correo === "") {
        mensajeError.innerText = "Por favor, ingrese un correo.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el correo está vacío
    }

    if (!correo.includes("@")) {
        mensajeError.innerText = "Ingrese un correo válido.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el correo no contiene "@"
    }

    return true; // Permite el envío del formulario si el correo es válido
}

function validadorDatos(){
    var correo = document.getElementById("correo").value;
    var mensajeError = document.getElementById("mensajeErrorCorreo");

    if (correo === "") {
        mensajeError.innerText = "Por favor, ingrese un correo.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el correo está vacío
    }

    if (!correo.includes("@")) {
        mensajeError.innerText = "Ingrese un correo válido sacowea.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el correo no contiene "@"
    }

    var contraseña = document.getElementById("contraseña").value;
    var mensajeError = document.getElementById("mensajeErrorContraseña");

    if (contraseña === "") {
        mensajeError.innerText = "Por favor, ingrese una contraseña.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si la contraseña está vacía
    }

    var contraseña = document.getElementById("contraseña").value;
    var repetirContraseña = document.getElementById("repetirContraseña").value; // Obtener el valor del campo de repetir contraseña
    var mensajeError = document.getElementById("mensajeErrorRepetirContraseña");
    document.getElementById("repetirContraseña").value = ""; // Borra el texto dentro del input

    if (repetirContraseña !== contraseña) {
        mensajeError.innerText = "Las contraseñas no coinciden.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si las contraseñas no coinciden
        
    }

    var nombre = document.getElementById("nombre").value;
    var mensajeError = document.getElementById("mensajeErrorNombre");

    if (nombre === "") {
        mensajeError.innerText = "Por favor, ingrese su nombre.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el nombre está vacío
    }

    var apellido = document.getElementById("apellido").value;
    var mensajeError = document.getElementById("mensajeErrorApellido");

    if (apellido === "") {
        mensajeError.innerText = "Por favor, ingrese su apellido.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el apellido está vacío
    }

    return true; // Permite el envío del formulario si todos los datos son válidos
}

function aletarE() {
    alert("Su nueva cuenta se creó exitosamente")
}

function validarUsuarioCreado(){
    var correo = document.getElementById("correoCreado").value;
    var mensajeError = document.getElementById("mensajeErrorCorreoCreado");

    if (correo === "") {
        mensajeError.innerText = "Por favor, ingrese su correo.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el correo está vacío
    }

    if (!correo.includes("@")) {
        mensajeError.innerText = "Ingrese un correo válido.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el correo no contiene "@"
    }

    var contraseñacreada = document.getElementById("contraseñaCreada").value;
    var mensajeError = document.getElementById("mensajeErrorContraseñaCreada");

    if (contraseñacreada === "") {
        mensajeError.innerText = "Ingrese su contraseña.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si la contraseña es incorrecta
    }

    return true; // Permite el envío del formulario si el correo es válido
}