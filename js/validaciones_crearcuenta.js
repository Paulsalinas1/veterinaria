function validadorDatos(){
    var correo = document.getElementById("correo").value;
    var mensajeError = document.getElementById("mensajeErrorCorreo");
//Validador de correo
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
//Validador de contraseña
    if (contraseña === "") {
        mensajeError.innerText = "Por favor, ingrese una contraseña.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si la contraseña está vacía
    }

    var contraseña = document.getElementById("contraseña").value;
    var repetirContraseña = document.getElementById("repetirContraseña").value; // Obtener el valor del campo de repetir contraseña
    var mensajeError = document.getElementById("mensajeErrorRepetirContraseña");
//Validador de repetir contraseña
    if (repetirContraseña !== contraseña) {
        mensajeError.innerText = "Las contraseñas no coinciden.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si las contraseñas no coinciden
        
    }

    var nombre = document.getElementById("nombre").value;
    var mensajeError = document.getElementById("mensajeErrorNombre");
//Validador de nombre
    if (nombre === "") {
        mensajeError.innerText = "Por favor, ingrese su nombre.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el nombre está vacío
    }

    var apellido = document.getElementById("apellido").value;
    var mensajeError = document.getElementById("mensajeErrorApellido");
//Validador de apellido
    if (apellido === "") {
        mensajeError.innerText = "Por favor, ingrese su apellido.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el apellido está vacío
    }

    var numeroTarjeta = document.getElementById("targeta").value;
    var mensajeError = document.getElementById("mensajeErrortargeta");  
//Validador de tarjeta
    if (numeroTarjeta===""){
     mensajeError.innerText = "Por favor, ingrese su targeta.";
     mensajeError.style.color = "red";
     return false; // Evita que se envíe el formulario vacío
    }else if (!/^[0-9]+$/.test(numeroTarjeta)) {
         mensajeError.innerText = "Por favor, no ingrese letras";
         mensajeError.style.color = "red";
         return false; // Evita que se envíe el formulario vacío
    }else if (numeroTarjeta.length !== 16){
         mensajeError.innerText = "Por favor, ingrese una targeta válida ";
         mensajeError.style.color = "red";
         return false; // Evita que se envíe el formulario vacío
    }else  {
     mensajeError.innerText = "Targeta válida ✅";
     mensajeError.style.color = "green";
    }

    var fechaIngresada = document.getElementById("fecha").value;
    var mensajeError = document.getElementById("mensajeErrorfecha");
    
    // Obtiene el mes y el año actuales del sistema
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11
    var añoActual = fechaActual.getFullYear();

     // Obtiene el mes y el año de la fecha ingresada por el usuario
    var partesFecha = fechaIngresada.split('/');
    var mesIngresado = parseInt(partesFecha[0], 10);
    var añoIngresado = parseInt(partesFecha[1], 10);
//Validador fecha caducacion
    if (fechaIngresada === ""){
        mensajeError.innerText = "Por favor, ingrese una fecha";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario vacío
    }else if (añoActual > añoIngresado || (añoActual === añoIngresado && mesActual > mesIngresado)){
        mensajeError.innerText = "Su tarjeta ya expiró, pruebe con otra.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario vacío
    } else if (fechaIngresada.length !== 7){
         mensajeError.innerText = "Por favor, ingrese una fecha válida";
         mensajeError.style.color = "red";
         return false; // Evita que se envíe el formulario vacío
    } else {
        mensajeError.innerText = "Fecha válida ✅";
        mensajeError.style.color = "green";
    }

    var cs = document.getElementById("cs").value;
    var mensajeError = document.getElementById("mensajeErrorcs");

    if(cs==="") {
        mensajeError.innerText = "Por favor, ingrese una codigo de seguridad ";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario vacío
    }else if(cs.length!==3){
        mensajeError.innerText = "Por favor, ingrese una codigo de seguridad válido";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario vacío
    }else{
        mensajeError.innerText = "Código de seguridad válido ✅";
        mensajeError.style.color = "green";
    }
    return true; // Permite el envío del formulario si todos los datos son válidos
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


    
    // Función para agregar la barra automáticamente después de ingresar el mes
    document.getElementById('fecha').addEventListener('input', function (e) {
        var input = e.target;
        if (input.value.length === 2 && !input.value.includes('/')) {
            input.value += '/';
        }
    });
    document.getElementById('fecha').addEventListener('input', function (e) {
        var input = e.target;
        input.value = input.value.replace(/[^\d\/]|^\/$/g, ''); // Elimina cualquier carácter que no sea dígito o "/" y evita una barra solitaria al inicio
    });

    function soloNumeros(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            event.preventDefault();
            return false;
        }
        return true;
    }