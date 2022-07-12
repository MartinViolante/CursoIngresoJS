/*Violante Martín 
DIV E 
TP 02
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//variables 
	let largo;
	let ancho;
	let perimetroDelTerreno;
	let hilosDeAlambre;
	let cantidadDeAlambre;

	//tomo y parseo datos
	largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);

	ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

	hilosDeAlambre = 3;

	//saco el perimetro
	perimetroDelTerreno = largo * 2 + ancho * 2;

	//calculo la cantidad de alambre 
	cantidadDeAlambre = perimetroDelTerreno * hilosDeAlambre;

	alert("La cantidad necesaria es de " + cantidadDeAlambre);

}
function Circulo () 
{
	//variables
	let radioDelTerreno;
	let hilosDeAlambre;
	let perimetroDelTerreno;
	let cantidadDeAlambre;

	//tomo y parseo datos 
	radioDelTerreno = document.getElementById("txtIdRadio").value;
	radioDelTerreno = parseInt(radioDelTerreno);

	hilosDeAlambre = 3;

	//saco el perímetro del terreno
	perimetroDelTerreno = 2 * Math.PI * radioDelTerreno;

	//calculo la cantidad de alambre a usar 
	cantidadDeAlambre = hilosDeAlambre * perimetroDelTerreno;

	alert("La cantidad necesaria es " + cantidadDeAlambre);

}

function Materiales () 
{
	//variables
	let cemento;
	let cal;
	let largo;
	let ancho;
	let areaDelTerreno;
	let cantidadBolsasCemento;
	let cantidadBolsasCal;
	
	//tomo y parseo datos 
	cemento = 2;
	cal = 3;

	largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);

	ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

	//calculo area del terreno
    areaDelTerreno = largo * ancho;

	//calculo cantidad de material a usar 
    cantidadBolsasCemento = cemento * areaDelTerreno; 
    cantidadBolsasCal = cal * areaDelTerreno; 

	alert("Para el contrapiso necesitas " + cantidadBolsasCemento + " bolsas de cemento y " + cantidadBolsasCal + " bolsas de cal");
}