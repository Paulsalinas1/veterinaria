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