
$(document).ready(function () {
    $("#correoCreado").blur(function () {
        validarCorreosuario();
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
    
    $("#contraseñaCreada").attr("minlength","6");
    $("#btn_inicio_c").click(function () {
        if (validarCorreosuario()) {
            if (validarContraseñaUsuario()) {
                var correo = $("#correoCreado").val();
                // Realizar alguna validación de los datos si es necesario
                // Verificar el correo y asignar el action al formulario según sea necesario
                if (correo.includes("@gmail.com") ) {
                    $("#ini_f_c").attr("action", "../html/index_login.html"); // Redirigir al usuario 1 a la página 1
                } else if (correo.includes( "@trabajador.com")) {
                    $("#ini_f_c").attr("action", "../html/trabajador.html"); // Redirigir al usuario 2 a la página 2
                }else if (correo.includes( "@trabajador.cl")) {
                    $("#ini_f_c").attr("action", "../html/trabajador.html"); // Redirigir al usuario 2 a la página 2
                }else if (correo.includes("@gmail.cl") ) {
                    $("#ini_f_c").attr("action", "../html/index_login.html"); // Redirigir al usuario 1 a la página 1
                }else if (correo.includes("@hotmail.cl") ) {
                    $("#ini_f_c").attr("action", "../html/index_login.html"); // Redirigir al usuario 1 a la página 1
                }else if (correo.includes("@hotmail.com") ) {
                    $("#ini_f_c").attr("action", "../html/index_login.html"); // Redirigir al usuario 1 a la página 1
                }else {
                    alert("Correo o contraseña incorrectos");
                    return false; // Evitar enviar el formulario si las credenciales son incorrectas
                }
            }
        }
    });
});

