
$(document).ready(function () {
    $("#correoCreado").blur(function () {
        validarCorreosuario();
    });

    $("#contraseñaCreada").blur(function () {
        validarContraseñaUsuario();
    });

    $("#btn_inicio_c").click(function () {
        validarInicioS2();
    });

});



