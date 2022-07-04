/* Violante Martín - DIV Z - Ejercicio 07
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	var destinoIngresado; 

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case 'Ushuaia':
			alert("Se encuentra en el sur argentino");
			break;

		case 'Mar del plata':
			alert("Se encuentra en el este argentino");
			break;

		case 'Bariloche':
			alert("Se encuentra en el oeste argentino");
			break;

		default:
			alert("Se encuentra en el norte argentino");
			break;
	}
}