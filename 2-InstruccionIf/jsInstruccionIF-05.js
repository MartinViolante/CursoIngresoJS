/* Violante Martín 
 DIV E
 IF/ELSE 05
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	//variable
	let edad;

	//tomo y parseo el dato
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//condición 
	if (edad < 12 || edad > 17)
	{
		alert("Usted no es adolescente")
	}
}