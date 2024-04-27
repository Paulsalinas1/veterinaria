function validarCorreo() {
    var correo = document.getElementById("floatingPassword").value;
    var mensajeError = document.getElementById("mensajeError");

    if (correo === "") {
        mensajeError.innerText = "Por favor, ingresa un correo.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el correo está vacío
    }

    if (!correo.includes("@")) {
        mensajeError.innerText = "Ingresa un correo válido sacowea.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el correo no contiene "@"
    }

    return true; // Permite el envío del formulario si el correo es válido
}