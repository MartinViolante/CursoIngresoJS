/* Violante Martín - DIV Z - Ejercicio While 08
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		contador ++;
		respuesta = confirm("¿Ingresa otro numero?");

		if (numeroIngresado > 0)
		{
			sumaPositivos = numeroIngresado + sumaPositivos;
		}
		else
		{
			multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;
		}
	}
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}