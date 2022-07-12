/* Violante Martín 
 DIV E
 IF/ELSE 03
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/

function mostrar()
{
	//variable
	let edad;

	//tomo y parseo el dato
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//primer condición
	if (edad >= 18)
	{
		alert("Usted es mayor de edad")
	}

	//segunda condición
	else
	{
		alert("Usted es menor de edad")
	}

}