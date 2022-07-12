/* Violante Martín 
DIV E 
IF/ELSE 02
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{
	//variable
	 let edad;

	 //tomo y parseo el dato
	 edad = document.getElementById("txtIdEdad").value;
	 edad = parseInt(edad);

	 if(edad >= 18)
	 {
	 	alert("Es mayor de edad");
	 }

}