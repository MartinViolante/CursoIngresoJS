/* Violante Martín 
 DIV E 
 IF/ELSE 04
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive).
*/

function mostrar()
{
	//variable 
	let edad;

	//tomo y parseo el dato
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//condición
	if (edad > 12 && edad < 18)
	{
		alert("Usted es adolescente")
	}

}

//operadores lógicos
// && Y (se cumplen ambas condiciones)
// || O (se cumple una)
// ! No (no se cumple ninguna)