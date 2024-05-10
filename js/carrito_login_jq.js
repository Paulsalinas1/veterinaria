$(document).ready(function () {

    $("#debito").blur(function () {
        validarMetodoPago();
    });

    $("#credito").click(function () {
        validarMetodoPago();
    });

    $("#retiroTienda").click(function () {
        validarMetodoEnvio();
    });

    $("#envioDomicilio").click(function () {
        validarMetodoEnvio();
    });

    $("#btn_compra").click(function () {
        validarCompra();
    });

    $("#decre1").click(function () {
        decrementarCantidad1('cantidad1');
    });
    $("#aumento1").click(function () {
        incrementarCantidad1('cantidad1');
    });
    $("#decre2").click(function () {
        decrementarCantidad2('cantidad2');
    });
    $("#aumento2").click(function () {
        incrementarCantidad1('cantidad2');
    });
});