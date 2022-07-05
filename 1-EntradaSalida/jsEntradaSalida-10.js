/*Violante Martín
DIV E
Ejercicio E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//variables
	let importeBruto;
	let descuento;
	let importeFinal;
	
	//toma de datos 
	importeBruto = document.getElementById("txtIdImporte").value;
	importeBruto = parseInt(importeBruto);

	//descuento
	descuento = importeBruto * (25/100)

	importeFinal = importeBruto - descuento;

	alert("El importe bruto es de " + importeBruto + ", el importe a descontar es " +  descuento + " y el importe final es de " + importeFinal)
}
