/* Violante Martín - DIV Z - Ejercicio While 07
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var acumulador;
	var contador

	respuesta='si';
	acumulador = 0;
	contador = 0;
	
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		contador++;
		respuesta = prompt("Ingresa otro numero? si/no");
	}
	promedio = acumulador/contador;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;

}