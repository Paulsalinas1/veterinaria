<!DOCTYPE HTML>
<html>
    <head>
        <script type="text/javascript">
            function nuevo(pcorreo) {
                 if (pcorreo.includes('@trabajador.com')) {
                    window.location.href = "../html/index_trabajador.html";
                   //window.open("index_trabajador.html");                         
                }else {
                     window.location.href = "../html/index_login.html";}
                }
        </script>
    </head>
    <body>
    <h3 align="center" >Validar esta cosa</h3>
    <?php
		$correo  = $_REQUEST['correoCreado'];
        $clave  = $_REQUEST['contraseñaCreada'];
        echo "<script>nuevo('".$correo."');</script>"; 
    ?>
   </script>
        </script>
    </body>
</html>

