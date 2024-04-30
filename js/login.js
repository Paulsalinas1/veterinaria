/*function validar() {
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
*/
//Función para mostrar contraseña de usuarios
function togglePassword() {
    var input = document.getElementById("contraseñaCreada");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

function validarCorreosuario(){
    var correo = document.getElementById("correoCreado").value;
    var mensajeError = document.getElementById("mensajeErrorCorreoCreado");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo === "") {
        mensajeError.innerText = "Por favor, ingrese su correo.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el correo está vacío
    }else if (!emailRegex.test(correo)) {
        mensajeError.innerText = "Ingrese un correo válido.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el correo no contiene "@"
    }else {
        mensajeError.innerText = "Correo electrónico válido ✅";
        mensajeError.style.color = "green";  
    }
} 
function validarContraseñaUsuario(){
    var contraseñacreada = document.getElementById("contraseñaCreada").value;
    var mensajeError = document.getElementById("mensajeErrorContraseñaCreada");

    if (contraseñacreada === "") {
        mensajeError.innerText = "Ingrese su contraseña.";
        mensajeError.style.color = "red";
    
    }else {
        mensajeError.innerText = "Contraseña correcta ✅";
        mensajeError.style.color = "green";  
    }
}

function validarInicioS2(){
    validarCorreosuario()
    validarContraseñaUsuario()
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()