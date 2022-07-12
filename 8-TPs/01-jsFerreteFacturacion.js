/*Violante Martín -
 DIV E
TP 01
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//variables
	let precio1;
	let precio2;
	let precio3;
	let resultadoSuma;

	//tomo y parseo datos
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseInt(precio2);
	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseInt(precio3);

	//resultado
	resultadoSuma = precio1 + precio2 + precio3;
	alert("La suma de los tres precios ingresados es de $" + resultadoSuma);

}

function Promedio () 
{
	//variables 
	let precio1;
	let precio2;
	let precio3;
	let suma;
	let promedio;

	//tomo y parseo datos
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseInt(precio2);
	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseInt(precio3);

	//sumo los precios
	suma = (precio1 + precio2 + precio3);

	//saco el promedio
	promedio = suma / 3;

	alert("El promedio de los 3 precios ingresados es de $" + promedio);

}

function PrecioFinal () 
{
	//variables
	let precio1;
	let precio2;
	let precio3;
	let suma;
	let IVA;
	let precioFinal;
	
	//tomo y parseo datos
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);

	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseInt(precio2);

	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseInt(precio3);

	IVA = 21;

	//sumo los precios
	suma = (precio1 + precio2 + precio3);

	//saco el precio final 
	precioFinal = suma + (suma / 100 * IVA);

	alert("El precio final es de  $" + precioFinal);

}