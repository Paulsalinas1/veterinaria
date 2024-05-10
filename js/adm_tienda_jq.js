

$(document).ready(function () {
    // Manejar el evento click del botón de inicio de sesión
    $("#valorp_1").attr("onkeypress","soloNumeros2(event)");
    $("#valorp_2").attr("onkeypress","soloNumeros2(event)");
    $("#modi_p1").attr("accept","image/*");
    $("#modi_p2").attr("accept","image/*");
    
    $("#btn_a12").click(function () {
        incrementarCantidad('cantidad12');
    });
    $("#btn_a11").click(function () {
        incrementarCantidad('cantidad11');
    });
    $("#btn_a10").click(function () {
        incrementarCantidad('cantidad10');
    });
    $("#btn_a9").click(function () {
        incrementarCantidad('cantidad9');
    });
    $("#btn_a8").click(function () {
        incrementarCantidad('cantidad8');
    });
    $("#btn_a7").click(function () {
        incrementarCantidad('cantidad7');
    });
    $("#btn_a6").click(function () {
        incrementarCantidad('cantidad6');
    });
    $("#btn_a5").click(function () {
        incrementarCantidad('cantidad5');
    });
    $("#btn_a4").click(function () {
        incrementarCantidad('cantidad4');
    });
    $("#btn_a3").click(function () {
        incrementarCantidad('cantidad3');
    });
    $("#btn_a2").click(function () {
        incrementarCantidad('cantidad2');
    });
    $("#btn_a1").click(function () {
        incrementarCantidad('cantidad1');
    });
    $("#btn_d12").click(function () {
        decrementarCantidad('cantidad12');
    });
    $("#btn_d11").click(function () {
        decrementarCantidad('cantidad11');
    });
    $("#btn_d10").click(function () {
        decrementarCantidad('cantidad10');
    });
    $("#btn_d9").click(function () {
        decrementarCantidad('cantidad9');
    });
    $("#btn_d8").click(function () {
        decrementarCantidad('cantidad8');
    });
    $("#btn_d7").click(function () {
        decrementarCantidad('cantidad7');
    });
    $("#btn_d6").click(function () {
        decrementarCantidad('cantidad6');
    });
    $("#btn_d5").click(function () {
        decrementarCantidad('cantidad5');
    });
    $("#btn_d4").click(function () {
        decrementarCantidad('cantidad4');
    });
    $("#btn_d3").click(function () {
        decrementarCantidad('cantidad3');
    });
    $("#btn_d2").click(function () {
        decrementarCantidad('cantidad2');
    });
    $("#btn_d1").click(function () {
        decrementarCantidad('cantidad1');
    });
    

});

