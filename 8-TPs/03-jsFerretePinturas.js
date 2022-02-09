/*Violante Martín - DIV Z - TP 03
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaF;
	var temperaturaC;
	var texto;

	temperaturaF = document.getElementById("txtIdTemperatura").value;
	temperaturaF = parseFloat(temperaturaF);



	temperaturaC = (((temperaturaF - 32)* 5)/ 9);
	

	texto = temperaturaF + " grados Fahrenheit son " + temperaturaC + " grados Centigrados";

	alert(texto);

}

function CentigradosFahrenheit () 
{
	var temperaturaC;
	var temperaturaF;
	var texto;

	temperaturaC = document.getElementById("txtIdTemperatura").value;
	temperaturaC = parseFloat(temperaturaC);

	temperaturaF = ((temperaturaC * 9 / 5)+ 32);

	texto = temperaturaC + " grados Centigrados son " + temperaturaF + " grados Fahrenheit";

	alert(texto);

}
