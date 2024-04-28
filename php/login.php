<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Latest compiled and minified CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

        <!-- Latest compiled JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="Css/cssmain.css">
        <link rel="icon" href="img/logo.png">
        <title>Login</title>
    </head>
    <body class=" bg-primary d-flex justify-content-center align-items-center  vh-100 ">
    <?php
            $mysqli = new mysqli("localhost", "compra", "compra", "veterinaria", 3306);
            if ($mysqli->connect_errno) {
                echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
                                        }
        ?>
        <div class="cotainer-fluid bg-white p-5 rounded-5 text-secudary " style="width: 25rem;" id="login">

            <div class=" d-flex justify-content-center">
                <img src="img/logo.png" style="height: 8rem; " alt="logo tienda">
            </div>

            <h2 class="text-center">Login</h2>

            <div class="mb-3">
                <div class="form-floating ">
                    <input type="email" class="form-control" id="floatingPassword" placeholder="Email" required>
                    <label for="floatingEmail">Correo</label>
                </div>
            </div>

            <div class="mb-3">
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
                    <label for="floatingPassword">Contraseña</label>
                </div>
            </div>

            <div class="mb-3 text-center">
                <a href="recordando.html">¿Se te olvidó la contraseña?</a>
            </div>

            <div class="mb-3 text-center">
                <!-- reemplazar # por link de cuenta de trabajador-->
                <a href="trabajador.html">Cuenta de admin</a>
            </div>

            <div class="mb-3">
                <a class= "btn btn-primary w-100 " href="autenticacion.php"> Iniciar sesión </a>
            </div>

            <div class="mb-3">
                <a href="registro.html">Crear cuenta</a>
            </div>
            <div class="mb-3">
                <a href="index.html">Menú</a>
            </div>
        </div>
    </body>
</html>