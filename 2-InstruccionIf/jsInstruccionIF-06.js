/* Violante Martín 
 DIV E
 IF/ELSE 06
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	//variable
	let edad;

	//tomo y parseo el datp
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//primera condición
	if(edad > 17)
	{
		alert("Sos un adulto");
	}
	else
		if(edad > 12 && edad < 18) //segunda condición
		{
			alert("Sos un adolescente");
		}
		else //tercera condición 
		{
			alert("Sos un niño")
		}

}