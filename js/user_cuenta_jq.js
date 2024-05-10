$(document).ready(function () {
    
    $("#vali_contra").blur(function () {
        contra_1();
    });
    
    $("#vali_nombre").blur(function () {
        nombre_v();
    });

    $("#vali_ape").blur(function () {
        apellido_v();
    });

    $("#vali_fono").blur(function () {
        telefono();
    });

    $("#vali_targe").blur(function () {
        tageta_v();
    });

    $("#vali_fv").blur(function () {
        vencimiento_v();
    });

    $("#vali_cs").blur(function () {
        codigo_v();
    });

    $("#btn_vali1").click(function () {
        validarvali1();
    });
    $("#btn_vali2").click(function () {
        validarvali2();
    });
    $("#btn_vali2").click(function () {
        validarvali3();
    });
});

$(document).ready(function () {
    // Manejar el evento click del botón de inicio de sesión
    
    $("#vali_contra").attr("minlength","6");
    $("#vali_fono").attr("maxlength","9");
    $("#vali_fono").attr("onkeypress","return soloNumeros(event)");
    $("#vali_targe").attr("pattern","[0-9]{16}");
    $("#vali_targe").attr("minlength","16");
    $("#vali_targe").attr("maxlength","16");
    $("#vali_targe").attr("onkeypress","return soloNumeros(event)");
    $("#vali_fv").attr("maxlength","5");
    $("#vali_fv").attr("minlength","5");
    $("#vali_cs").attr("pattern","[0-9]{3}");
    $("#vali_cs").attr("minlength","3");
    $("#vali_cs").attr("maxlength","3");
    $("#vali_cs").attr("onkeypress","return soloNumeros(event)");
});