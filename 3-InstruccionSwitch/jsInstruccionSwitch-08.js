/* Violante Martín - DIV Z - Ejercicio 08
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destinoIngresado;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case ('Bariloche'):
		case ('Ushuaia'):
			alert("En este lugar hace frio");
			break;

		default:
			alert("En este lugar hace calor");
			break;
	}
}