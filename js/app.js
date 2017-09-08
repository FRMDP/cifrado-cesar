const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");

function cifrado(){
	const textoIngresado = texto.value;
	textoCifrado.value = textoIngresado.split('').map(c=>{
		let valorEntero = c.charCodeAt(0);
		if(valorEntero >= 97 && valorEntero <= 122)
			{
				const valorDesplazamiento = parseInt(desplazamiento.value);
				
				valorEntero = valorEntero + valorDesplazamiento;
				if(valorEntero > 122)
					valorEntero = 97 + valorEntero - 122 - valorDesplazamiento;
			}
	
			return String.fromCharCode(valorEntero);
		}).join('');
}

texto.addEventListener("keyup",cifrado);
desplazamiento.addEventListener("change", cifrado);