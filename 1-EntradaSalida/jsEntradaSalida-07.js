/*Violante Martín - DIV Z 
Ejercicio E/S 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var resultado; 

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1); // "11" -> 11

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	resultado = numero1 + numero2;

	alert("La suma es " + resultado);
	
}

function restar()
{
	var numero1
	var numero2
	var resultado

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1); // "11" -> 11

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	resultado = numero1 - numero2;

	alert("La resta es " + resultado)


}

function multiplicar()
{ 
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1); // "11" -> 11

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	resultado = numero1 * numero2;

	alert("La multiplicación es " + resultado)
}

function dividir()
{
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1); // "11" -> 11

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	resultado = numero1 / numero2;

	alert("La división es " + resultado)
}

