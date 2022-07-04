var secuenciaSecretaDeColores;
var secuenciaIngresada=new Array("vacio","vacio","vacio","vacio");
var contadorDeIntentos=0;
function Comenzar()
{
	 //en esta funcion deberiamos generar una secuencia random 
	 //de los cuatro colores sin repetir colores
	 secuenciaSecretaDeColores=["Amarillo","Rojo","Azul","Verde"];
	 console.info("colores cargados",secuenciaSecretaDeColores);
}

function Responder(parametroColor) 
{
	var i;
	for(i=0;i<4;i++)
	{
		if(secuenciaIngresada[i]=="vacio")
		{
			secuenciaIngresada[i]=parametroColor;
			console.info("colores ingresados",secuenciaIngresada);
			break;
		}
	}

	
}

function Verificar()
{
	var mensaje;
	var aciertosConseguidos=0;
	contadorDeIntentos++;

	for(i=0;i<4;i++)
	{
		if(secuenciaIngresada[i]==secuenciaSecretaDeColores[i])
		{
			aciertosConseguidos++;
		}
	}
	if(aciertosConseguidos==4)
	{
		mensaje="  excelente !!!";
	}else
	{
		mensaje=" ..Correctas: "+aciertosConseguidos;
		if(contadorDeIntentos==4)
		{
			alert("Casi lo logras... mas suerte la proxima ! ! !");
			alert(secuenciaSecretaDeColores);
		}
	}

	
	switch(contadorDeIntentos)
	{
		case 1:
			txtIdPrimerIntento.value=secuenciaIngresada+" " +mensaje;
		break;
		case 2:
			txtIdSegundoIntento.value=secuenciaIngresada+" " +mensaje;
		break;
		case 3:
			txtIdTercerIntento.value=secuenciaIngresada+" " +mensaje;
		break;
		case 4:
			txtIdCuartoIntento.value=secuenciaIngresada+" " +mensaje;
		break;
	}

	
	secuenciaIngresada=new Array("vacio","vacio","vacio","vacio");
}








/*var nombre;
var peso;
var raza; //(caniche, ovejero, siberiano)
var precio;
var edad;
var maximoPeso;
var nombreMasPesado;
var razaMasPesado;
var banderaPerroMasPesado;
var acumuladorEdadCaniche;
var acumuladorEdadOvejero;
var acumuladorEdadSiberiano;
var contadorCaniche;
var contadorOvejero;
var contadorSiberiano;
var promedioEdadCaniche;
var promedioEdadOvejero;
var promedioEdadSiberiano;
var facturacionBruto;
var contadorSiberianoRangoEdad;

var respuesta;

respuesta = "si";
banderaPerroMasPesado = 0;

/*Inicializar contadores y acumuladores...

while(respuesta == "si")
{
	/*Ingreso y validacion de los datos

	//a) El nombre y la raza del perro con más peso
	if(peso > maximoPeso || banderaPerroMasPesado == 0)
	{
		maximoPeso = peso;
		nombreMasPesado = nombre;
		razaMasPesado = raza;
		banderaPerroMasPesado = 1;

	}

	//b) El promedio de edad por raza.
	switch(raza)
	{
		case "caniche":
			contadorCaniche++;
			acumuladorEdadCaniche += edad;
		break;
		case "ovejero":
			contadorOvejero++;
			acumuladorEdadOvejero += edad;
		break;
		case "siberiano":
			contadorSiberiano++;
			acumuladorEdadSiberiano += edad;
			//d) La cantidad de siberianos cuya edad esté entre 2 y 5 años.
			if(edad>1 && edad<6)
			{
				contadorSiberianoRangoEdad++;
			}
		break;
	}

	facturacionBruto += precio; 

	
	Violante Martín - DIV Z - Examen Ejercicio 1
	Ejercicio char16_tPara una veterinaria se pide clasificar el ingreso de pacientes hasta que el usuario quiera (se limita a 1 perrito por ingreso), se les pide: nombre, precio de la consulta, raza: (validar entre caniche, ovejero, siberiano), edad y peso 
	determinar:
	El nombre y la raza del perro con más peso
	El promedio de edad por raza.
	La facturación en bruto de la veterinaria
	La cantidad de siberianos cuya edad esté entre 2 y 5 años.
}

//b) el calculo de los promedios


if(contadorOvejero!=0)
{
	promedioEdadOvejero = acumuladorEdadOvejero/contadorOvejero;
	//mostrar promedio	
}
else
{
	//No hubo
}

//Lo mismo que con ovejero...
promedioEdadCaniche = acumuladorEdadCaniche/contadorCaniche;
promedioEdadSiberiano = acumuladorEdadSiberiano/contadorSiberiano;


//Mostrar los datos del punto a)
//Mostrar Facturacion en bruto punto c)
//Mostrar contador punto d)*/