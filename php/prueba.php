﻿<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<script type="text/javascript">
		function nuevo() {
 			var pclave  = document.getElementById("clave").value; 
            if (pclave == 'vito') {
				var purl = "index_trabajador.html";
				window.open(purl);
			}
			else {
				var purl = "index_login.html";
				window.open(purl);
			}
			}

    </script>

<title>Creacion Nuevo Juego</title>
</head>
<body>
<h3 align="center" >Creacion Nuevo Juego</h3>
<form id="formulario" name="formulario" method="post"> 
<p>
	<label for="clave">Clave:</label>
	<input type="text" id="clave" name="clave" size="10"><br />          
	<input type="button" value="Nuevo Juego" onclick="nuevo();?>">
</p>		
</form>
</body>
</html>
