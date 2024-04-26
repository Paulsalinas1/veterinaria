function comprar() {
    // Verificar si el wea seleccionó un método de pago
    const metodosPago = document.getElementsByName('tipoTarjeta');
    let pagoSeleccionado = false;
    for (let i = 0; i < metodosPago.length; i++) {
        if (metodosPago[i].checked) {
            pagoSeleccionado = true;
            break;
        }
    }
    // Verificar si el wear seleccionó un método de envío
    const metodoEnvio = document.getElementsByName('metodoEnvio');
    let envioSeleccionado = false;
    for (let i = 0; i < metodoEnvio.length; i++) {
        if (metodoEnvio[i].checked) {
            envioSeleccionado = true;
            break;
        }
    }
    // Mostrar la alerta por si el wear no elige
    if (!pagoSeleccionado || !envioSeleccionado) {
        alert('Por favor, seleccione un método de pago y un método de envío.');
    } else {
        alert('Compra realizada con éxito.');
        window.location.href = 'compras_login.html';
    }
}


function incrementarCantidad(id) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrementarCantidad(id) {
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