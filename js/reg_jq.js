$(document).ready(function () {
    $("#Rut").blur(function () {
        validaRut();
    });
    
    $("#contraseñaCreada").blur(function () {
        validarContraseñaUsuario();
    });

    $("#ojo").click(function () {
        togglePassword();
    });

    $("#btn_inicio_c").click(function () {
        validarInicioS2();
    });
});

$(document).ready(function () {
    // Manejar el evento click del botón de inicio de sesión
    $("#Rut").attr("oninput","formatRut()")
});