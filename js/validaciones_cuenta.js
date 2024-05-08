//--------------------------------------------------------------------------------------------

function validarCorreoCrear() {
    var correo = document.getElementById("correo").value;
    var mensajeError = document.getElementById("mensajeErrorCorreoCrear");

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

function contra_1() {
    var contraseña = document.getElementById("contraseña").value;
    var mensajeError = document.getElementById("mensajeErrorContraseña");

    if (contraseña === "") {
        mensajeError.innerText = "Por favor, ingrese una contraseña";
        mensajeError.style.color = "red";
        return false;// Evita que se envíe el formulario si la contraseña está vacía
    } else if (contraseña.length < 6) {
        mensajeError.innerText = "La contraseña debe tener al menos 6 caracteres";
        mensajeError.style.color = "red";
        return false;// Evita que se envíe el formulario si la contraseña tiene menos de 6 caracteres
    } else {
        mensajeError.innerText = "Contraseña ingresada ✅";
        mensajeError.style.color = "green";
        return true;
    }
    
}

function contra_2() {
    var contraseña = document.getElementById("contraseña").value;
    var repetirContraseña = document.getElementById("repetirContraseña").value; // Obtener el valor del campo de repetir contraseña
    var mensajeError = document.getElementById("mensajeErrorRepetirContraseña");

    if (contraseña === "") {
        mensajeError.innerText = "Por favor, ingrese una contraseña";
        mensajeError.style.color = "red";
        return false;
    } else if (contraseña.length < 6) {
        mensajeError.innerText = "La contraseña debe tener al menos 6 caracteres";
        mensajeError.style.color = "red";
        return false;// Evita que se envíe el formulario si la contraseña tiene menos de 6 caracteres
    }else if (repetirContraseña !== contraseña) {
        mensajeError.innerText = "Las contraseñas no coinciden.";
        mensajeError.style.color = "red";
        return false;
    } else {
        mensajeError.innerText = "Contraseñas iguales ✅";
        mensajeError.style.color = "green";
        return true;
    }
    
}

function nombre_v() {
    var nombre = document.getElementById("nombre").value;
    var mensajeError = document.getElementById("mensajeErrorNombre");

    if (nombre === "") {
        mensajeError.innerText = "Por favor, ingrese su nombre.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el nombre está vacío
    } else {
        mensajeError.innerText = "Nombre correcto ✅";
        mensajeError.style.color = "green";
        return true;
    }
}

function apellido_v() {
    var apellido = document.getElementById("apellido").value;
    var mensajeError = document.getElementById("mensajeErrorApellido");

    if (apellido === "") {
        mensajeError.innerText = "Por favor, ingrese su apellido.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si el apellido está vacío
    } else {
        mensajeError.innerText = "Apellido correcto ✅";
        mensajeError.style.color = "green";
        return true;
    }
    
}

function telefono() {
    var telefono = document.getElementById("fono").value;
    var mensajeError = document.getElementById("mensajeErrorTelefono");

    if (telefono === "") {
        mensajeError.innerText = "Por favor, ingrese su número telefónico";
        mensajeError.style.color = "red";
        return false;
    } else if (telefono.length !== 9) {
        mensajeError.innerText = "Por favor, ingrese un número válido";
        mensajeError.style.color = "red";
        return false;
    } else {
        mensajeError.innerText = "Número válido ✅";
        mensajeError.style.color = "green";
        return true;
    }
    
}

function tageta_v() {
    var numeroTarjeta = document.getElementById("targeta").value;
    var mensajeError = document.getElementById("mensajeErrortargeta");

    if (numeroTarjeta === "") {
        mensajeError.innerText = "Por favor, ingrese su targeta.";
        mensajeError.style.color = "red";
        return false;
    } else if (!/^[0-9]+$/.test(numeroTarjeta)) {
        mensajeError.innerText = "Por favor, no ingrese letras";
        mensajeError.style.color = "red";
        return false;
    } else if (numeroTarjeta.length !== 16) {
        mensajeError.innerText = "Por favor, ingrese una targeta válida ";
        mensajeError.style.color = "red";
        return false;
    } else {
        mensajeError.innerText = "Targeta válida ✅";
        mensajeError.style.color = "green";
        return true;
    }
    
}

function vencimiento_v() {
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

    if (fechaIngresada === "") {
        mensajeError.innerText = "Por favor, ingrese una fecha";
        mensajeError.style.color = "red";
        return false;
    } else if (añoActual < añoIngresado || (añoActual === añoIngresado && mesActual > mesIngresado)) {
        mensajeError.innerText = "Su tarjeta ya expiró, pruebe con otra.";
        mensajeError.style.color = "red";
        return false;
    } else if (fechaIngresada.length !== 5) {
        mensajeError.innerText = "Por favor, ingrese una fecha válida";
        mensajeError.style.color = "red";
        return false;
    } else {
        mensajeError.innerText = "Fecha válida ✅";
        mensajeError.style.color = "green";
        return true;
    }
    
}

function codigo_v() {
    var cs = document.getElementById("cs").value;
    var mensajeError = document.getElementById("mensajeErrorcs");

    if (cs === "") {
        mensajeError.innerText = "Por favor, ingrese una código de seguridad ";
        mensajeError.style.color = "red";
        return false;
    } else if (cs.length !== 3) {
        mensajeError.innerText = "Por favor, ingrese una código de seguridad válido";
        mensajeError.style.color = "red";
        return false;
    } else {
        mensajeError.innerText = "Código de seguridad válido ✅";
        mensajeError.style.color = "green";
        return true;
    }
    
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

//Función para mostrar contraseña de usuarios
function togglePassword1() {
    var input = document.getElementById("contraseña");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

//Función para mostrar contraseña repetida de usuarios
function togglePassword2() {
    var input = document.getElementById("repetirContraseña");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}
// Valida el rut con su cadena completa "XXXXXXXX-X"
function validaRut() {
    var rutCompleto = document.getElementById("Rut").value;
    var mensajeError = document.getElementById("mensajeErrorRut");

    if (rutCompleto === "") {
        mensajeError.innerText = "Por favor, ingrese su run ";
        mensajeError.style.color = "red";
        return false;
    }else if (/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)){
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') {
            digv = 'k';
        }
        
        if (dv(rut) == digv){
            mensajeError.innerText = "Run válido ✅";
            mensajeError.style.color = "green";
            return true;
        }else {
            mensajeError.innerText = "Por favor, ingrese un run válido ";
            mensajeError.style.color = "red";
            return false;
        }    
    } 
}
function dv(T) {
    var M = 0, S = 1;
    for (; T; T = Math.floor(T / 10))
        S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
}

function formatRut() {
    let rutInput = document.getElementById("Rut");
    let rut = rutInput.value.replace(/[^\dkK]/g, ''); // Elimina cualquier caracter que no sea un dígito o 'k' (mayúscula o minúscula)
    rut = rut.replace(/^0+/, ''); // Elimina ceros a la izquierda
    
    let formattedRut = '';
    let rutLength = rut.length;
    
    if (rutLength > 1) {
        for (let i = 0; i < rutLength - 1; i++) {
            formattedRut += rut.charAt(i);
            if (i === rutLength - 2) {
                formattedRut += '-';
            }
        }
        formattedRut += rut.charAt(rutLength - 1);
    } else {
        formattedRut = rut;
    }
    
    rutInput.value = formattedRut;
}

function validarDatos(){
    validaRut();
    validarCorreoCrear();
    contra_1();
    contra_2();
    nombre_v();
    apellido_v();
    telefono();
    tageta_v();
    vencimiento_v();
    codigo_v();
}
$(".Desplegable-Registro").click(function (e) { 
    const idBoton = $(this).attr("id");
    const ultimoCaracter = idBoton.charAt(idBoton.length - 1);
    const spanId = "icono" + ultimoCaracter;
    $("#" + spanId).toggleClass("bi-chevron-down bi-chevron-up")
});