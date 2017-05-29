document.getElementById('texto').addEventListener('keyup', function() {
	const textoIgresado = this.value;

	document.getElementById('cifrado').value = textoIgresado.split('').map(c => {
		let valorEntero = c.charCodeAt(0);

		if(valorEntero >= 97 && valorEntero <= 122)
		{
			const valorDesplazamiento = parseInt(document.getElementById('desplazamiento').value);
			
			valorEntero = valorEntero + valorDesplazamiento;

			if(valorEntero > 122)
				valorEntero = 97 + valorEntero - 122 - valorDesplazamiento;
		}

		return String.fromCharCode(valorEntero);
	}).join('');
});