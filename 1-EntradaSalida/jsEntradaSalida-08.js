/*Violante Martín 
DIV E
Ejercicio E/S 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//variables 
	let dividendo;
	let divisor;
	let resto

	//toma y parseo de datos 
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	dividendo = parseInt(dividendo);

	divisor = document.getElementById("txtIdNumeroDivisor").value;
	divisor = parseInt(divisor);

	//obtengo el result

	resto = dividendo % divisor

	//operamos
	alert("El resto es " + resto);
}
