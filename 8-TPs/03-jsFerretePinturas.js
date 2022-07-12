/*Violante Martín 
 DIV E 
 TP 03
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//variables
	let temperaturaF;
	let temperaturaC;

	//tomo y parseo el dato
	temperaturaF = document.getElementById("txtIdTemperatura").value;
	temperaturaF = parseInt(temperaturaF);

	//convierto Fahrenheit a Centigrados
	temperaturaC = (((temperaturaF - 32)* 5)/ 9);
	
	temperaturaF + " grados Fahrenheit son " + temperaturaC + " grados Centigrados";

	alert(temperaturaF + " grados Fahrenheit son " + temperaturaC + " grados Centigrados");

}

function CentigradosFahrenheit () 
{
	//variables
	let temperaturaC;
	let temperaturaF;
	
	//tomo y parseo el dato
	temperaturaC = document.getElementById("txtIdTemperatura").value;
	temperaturaC = parseInt(temperaturaC);

	//convierto Centigrados a Fahrenheit 
	temperaturaF = ((temperaturaC * 9 / 5)+ 32);

	alert(temperaturaC + " grados Centigrados son " + temperaturaF + " grados Fahrenheit");

}
