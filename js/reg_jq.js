$(document).ready(function () {
    $("#Rut").blur(function () {
        validaRut();
    });
    
    $("#correo").blur(function () {
        validarCorreoCrear();
    });

    $("#contraseña").blur(function () {
        contra_1();
    });
    
    $("#ojo").click(function () {
        togglePassword1();
    });

    $("#repetirContraseña").blur(function () {
        contra_2();
    });

    $("#ojo2").click(function () {
        togglePassword2();
    });

    $("#nombre").blur(function () {
        nombre_v();
    });

    $("#apellido").blur(function () {
        apellido_v();
    });

    $("#fono").blur(function () {
        telefono();
    });

    $("#targeta").blur(function () {
        tageta_v();
    });

    $("#fecha").blur(function () {
        vencimiento_v();
    });

    $("#cs").blur(function () {
        codigo_v();
    });

    $("#btn_inicio_c").click(function () {
        validarInicioS2();
    });
});

$(document).ready(function () {
    // Manejar el evento click del botón de inicio de sesión
    $("#Rut").attr("oninput","formatRut()");
    $("#contraseña").attr("minlength","6");
    $("#repetirContraseña").attr("minlength","6");
    $("#fono").attr("maxlength","9");
    $("#fono").attr("onkeypress","return soloNumeros(event)");
    $("#targeta").attr("pattern","[0-9]{16}");
    $("#targeta").attr("minlength","16");
    $("#targeta").attr("maxlength","16");
    $("#targeta").attr("onkeypress","return soloNumeros(event)");
    $("#fecha").attr("pattern","(0[1-9]|1[0-2])\/\d{4}");
    $("#fecha").attr("maxlength","7");
    $("#fecha").attr("minlength","7");
    $("#cs").attr("pattern","[0-9]{3}");
    $("#cs").attr("minlength","3");
    $("#cs").attr("maxlength","3");
    $("#cs").attr("onkeypress","return soloNumeros(event)");
});