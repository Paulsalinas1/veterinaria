function validarMetodoPago(){
    var mensajeError = document.getElementById("mensajeErrorMetodoPago");
    var visaChecked = document.getElementById("debito").checked;
    var mastercardChecked = document.getElementById("credito").checked;

    if (!visaChecked && !mastercardChecked) {
        mensajeError.innerText = "Debes seleccionar un método de pago.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si no se ha seleccionado un método de pago
    } else {
        mensajeError.innerText = ""; // Borra el mensaje de error si se ha seleccionado un método de pago
        return true; // Permite el envío del formulario si se ha seleccionado un método de pago
    }
}

function validarMetodoEnvio(){
    var mensajeError = document.getElementById("mensajeErrorMetodoEnvio");
    var retiroTiendaChecked = document.getElementById("retiroTienda").checked;
    var envioDomicilioChecked = document.getElementById("envioDomicilio").checked;

    if (!retiroTiendaChecked && !envioDomicilioChecked) {
        mensajeError.innerText = "Debe seleccionar una opción para recibir el producto.";
        mensajeError.style.color = "red";
        return false; // Evita que se envíe el formulario si no se ha seleccionado un método de envío
    } else {
        mensajeError.innerText = ""; // Borra el mensaje de error si se ha seleccionado un método de envío
        return true; // Permite el envío del formulario si se ha seleccionado un método de envío
    }
}

function validarCompra() {
    validarMetodoPago();
    validarMetodoEnvio();
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

function incrementarCantidad1(id) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrementarCantidad1(id) {
    const input = document.getElementById(id);
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function incrementarCantidad2(id) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrementarCantidad2(id) {
    const input = document.getElementById(id);
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}