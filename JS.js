function registro(){
		email = document.getElementById("Email").value;
		pwd = document.getElementById("Password").value;
		name = document.getElementById("Nombre").value;
		pwd1 = document.getElementById("ConfPassword").value;
		
		if(pwd1==pwd){
		
		localStorage.setItem("Email", email);
		localStorage.setItem("Password", pwd);
		localStorage.setItem("Nombre", name);
		$('#registro').modal('hide');
		alert("Cuenta creada");
		}else{
			alert("La clave no concuerda");
		}
	
}

function inicioSes(){
		usuario = document.getElementById("User").value;
		contrasena = document.getElementById("UserPass").value;
		if(usuario == localStorage.getItem("Email") && contrasena == localStorage.getItem("Password")){
				$('#IniciarSesion').addClass("d-none");
				$('#Registro').addClass("d-none");
				$('#Ingreso').removeClass("d-none");
				$('#iniciosesion').modal('hide');
				$('#Menu').removeClass('d-none');
				alert("Bienvenido a Paragon 2.0");
			}	
		else{
				alert("Datos incorrectos, no se pudo ingresar");
				
		}
	document.getElementById("Control").innerHTML= usuario;
}

function cerrarSesion(){
	
	$('#nuestroEquipo').addClass("d-none");
	$('#profile').addClass("d-none");
	$('#carru').addClass("d-none");
	$('#Menu').addClass('d-none');
	$('#IniciarSesion').removeClass("d-none");
	$('#Registro').removeClass("d-none");
	$('#Ingreso').addClass("d-none");
	 localStorage.clear();
	sessionStorage.clear();
	
}

function Galeria(){
	$('#carru').removeClass("d-none");
	$('#rest').addClass("d-none");
	$('#nuestroEquipo').addClass("d-none");
	
}

function nuestroEquipo(){
	$('#carru').addClass("d-none");
	$('#rest').addClass("d-none");
	$('#nuestroEquipo').removeClass("d-none");
	
}

function Rest(){
	$('#carru').addClass("d-none");
	$('#rest').removeClass("d-none");
	$('#nuestroEquipo').addClass("d-none");
	
}
