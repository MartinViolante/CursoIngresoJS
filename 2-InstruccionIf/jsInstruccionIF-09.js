/* Violante Martín - DIV Z - IF/ELSE 09
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	let numeroRandom;
	let i;
	let maximo;
	let minimo;

	maximo = 10;
	minimo = 1;


	numeroRandom = Math.floor(Math.random() *(maximo + 1 - minimo)) + minimo;

	alert(numeroRandom);	

}