/* Violante Martín - DIV Z - Eercicio While 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var genero;
	var generoValidado;

	generoValidado = "No Binario";

	genero = prompt("Ingrese el genero: f, m o nb");

	while(genero != 'f' && genero != 'm' && genero != "nb")
	{
		genero = prompt("Error, reingrese el genero: f, m o nb");
	}

	switch(genero)
	{
		case 'f':
			generoValidado = "Femenino";
		break;

		case'm':
			generoValidado = "Masculino";
		break;

		default: 
			generoValidado = "No Binario";
		break;
		}

		txtIdSexo.value = generoValidado;
}