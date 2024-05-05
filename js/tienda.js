function incrementarCantidad1(id) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrementarCantidad1(id) {
    const input = document.getElementById(id);
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

function incrementarCantidad2(id) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrementarCantidad2(id) {
    const input = document.getElementById(id);
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

function mostrarMensaje() {
    var mensajeError = document.createElement("span");
    mensajeError.textContent = "Producto agregado al carrito ✅";
    mensajeError.style.color = "green";
    
    // Insertar el mensaje después del botón "Agregar al carrito"
    var boton = document.getElementById("botonAgregar");
    boton.parentNode.insertBefore(mensajeError, boton.nextSibling);
    
    // Temporizador para que el mensaje desaparezca después de 4 segundos
    setTimeout(function() {
        mensajeError.remove();
    }, 4000);
}