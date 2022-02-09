/* Violante Martín - DIV Z - IF/ELSE 05
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad < 12 || edad > 17)
	{
		alert("No soy adolescente")
	}

}