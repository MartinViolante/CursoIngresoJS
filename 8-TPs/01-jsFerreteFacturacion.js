/*Violante Martín - DIV Z 
TP 01
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultadoSuma;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseInt(precio2);
	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseInt(precio3);

	resultadoSuma = precio1 + precio2 + precio3;

	alert("la suma es " + resultadoSuma);

}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;
	var texto;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseInt(precio2);
	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseInt(precio3);

	suma = (precio1 + precio2 + precio3);

	promedio = suma / 3;
	

	texto = "El promedio de los 3 es " + promedio;

	alert(texto);

}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var IVA;
	var precioFinal;
	var texto;


	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseInt(precio2);
	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseInt(precio3);

	suma = (precio1 + precio2 + precio3);

	IVA = 21;	

	precioFinal = suma + (suma / 100 * IVA);

	texto = "El precio final es " + precioFinal;

	alert(texto);

}