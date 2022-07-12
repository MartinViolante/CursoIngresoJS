/*Violante Martín
 DIV E
Ejercicio E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
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

}*/

/******************************************************************************
9 bis - Violante Martín - DIV E
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento
en el cuadro de texto "RESULTADO".

El usuario debe ingresar el porcentaje del aumento
y debemos mostrar el valor del porcentaje del aumento 
por ALERT
*******************************************************************************/

function mostrarAumento()
{
	//variables
	let sueldo;
	let aumento;
	let porcentajeAumento;
	let resultado;

	//tomo y parseo
	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo); 

	//saco el porcentaje del aumento
	porcentajeAumento = prompt("Ingrese el porcentaje que quiere aumentar:");
	porcentajeAumento = parseInt(porcentajeAumento);

	//aumento
	aumento = sueldo * (porcentajeAumento/100);

	//resultado final
	resultado = sueldo + aumento; 

	document.getElementById("txtIdResultado").value = resultado;

	alert("Su aumento será de $" + aumento )



}