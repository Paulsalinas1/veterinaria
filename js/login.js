function validar() {
    let correo = document.getElementById("idcorreo").value.trim(); // Elimina espacios en blanco al inicio y al final
    
    // Expresión regular para validar el formato del correo electrónico
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "") {
        document.getElementById("mensaje20").className = "text-danger";
        document.getElementById("mensaje20").innerHTML = "Debe ingresar el correo electrónico ❌";
    } else if (!emailRegex.test(correo)) {
        document.getElementById("mensaje20").className = "text-danger";
        document.getElementById("mensaje20").innerHTML = "El correo electrónico no es válido ❌";
    } else {
        document.getElementById("mensaje20").className = "text-success";
        document.getElementById("mensaje20").innerHTML = "Correo electrónico válido ✅";
    }
}

//Función para mostrar contraseña de usuarios
function togglePassword() {
    var input = document.getElementById("contraseñaCreada");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}