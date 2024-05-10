//Función para mostrar contraseña de usuarios
function verContraseña() {
    var contraseñaInput = document.getElementById("contraseñaCreada");
    var ojoIcono = document.getElementById("show-hide1");

    if (contraseñaInput.type === "password") {
        contraseñaInput.type = "text";
        ojoIcono.classList.remove("bi-eye-slash");
        ojoIcono.classList.add("bi-eye");
    } else {
        contraseñaInput.type = "password";
        ojoIcono.classList.remove("bi-eye");
        ojoIcono.classList.add("fa-eye-slash");
    }
}

function validarCorreosuario(){
    var correo = document.getElementById("correoCreado").value;
    var mensajeError = document.getElementById("mensajeErrorCorreoCreado");
    
    if (correo === "") {
        mensajeError.innerText = "Por favor, ingrese su correo.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el correo está vacío
    }else if (correo.includes("@trabajador.com")) {
        mensajeError.innerText = "Correo electrónico de trabajador válido ✅";
        mensajeError.style.color = "green";
        return true; // Envía el formulario si el correo contiene "@trabajador.com"
    }else if (correo.includes("@gmail.com") || correo.includes("@hotmail.com")) {
        mensajeError.innerText = "Correo electrónico válido ✅";
        mensajeError.style.color = "green"; 
        return true; // correo valido
    }else if (correo.includes("@gmail.cl") || correo.includes("@hotmail.cl")) {
        mensajeError.innerText = "Correo electrónico válido ✅";
        mensajeError.style.color = "green"; 
        return true; // correo valido
    }else {
        mensajeError.innerText = "Ingrese un correo válido.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el correo no contiene "@gmail o @hotmail .com o .cl" 
    }
   
}

function validarContraseñaUsuario(){
    var contraseñacreada = document.getElementById("contraseñaCreada").value;
    var mensajeError = document.getElementById("mensajeErrorContraseñaCreada");

    if (contraseñacreada === "") {
        mensajeError.innerText = "Ingrese su contraseña.";
        mensajeError.style.color = "red";
        return false;// Evita que se envíe el formulario si la contraseña está vacía
    } else if (contraseñacreada.length < 6) {
        mensajeError.innerText = "La contraseña debe tener al menos 6 caracteres";
        mensajeError.style.color = "red";
        return false;// Evita que se envíe el formulario si la contraseña tiene menos de 6 caracteres
    }else {
        mensajeError.innerText = "Contraseña correcta ✅";
        mensajeError.style.color = "green";  
        return true;// Envía los datos ingresados si son correctos
    }
}


function validarInicioS2(){
    validarCorreosuario();
    validarContraseñaUsuario();
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