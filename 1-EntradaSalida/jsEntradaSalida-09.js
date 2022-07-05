/*Violante Martín
 DIV E
Ejercicio E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//variables
	let sueldo;
	let resultado;
	let aumento;

	//recopilación de datos
	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	//aumento
	aumento = sueldo * (10/100);

	resultado = sueldo + aumento;

	document.getElementById("txtIdResultado").value = resultado;

}
