/*Violante Martín - DIV Z 
TP 02
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetroDelTerreno;
	var hilosDeAlambre;
	var cantidadDeAlambre;
	var texto;

	largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);

	ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

	perimetroDelTerreno = largo * 2 + ancho * 2;

	hilosDeAlambre = 3;

	cantidadDeAlambre = perimetroDelTerreno * hilosDeAlambre;

	texto = "La cantidad necesaria es de " + cantidadDeAlambre;

	alert(texto);

}
function Circulo () 
{
	var radioDelTerreno;
	var hilosDeAlambre;
	var PI = 3.14;
	var ecuacion;
	var cantidadDeAlambre;

	radioDelTerreno = document.getElementById("txtIdRadio").value;
	radioDelTerreno = parseFloat(radioDelTerreno);

	hilosDeAlambre = 3;

	ecuacion = 2 * PI * radioDelTerreno;

	cantidadDeAlambre = hilosDeAlambre * ecuacion;

	texto = "La cantidad necesaria es ";

	alert(texto + cantidadDeAlambre);

}

function Materiales () 
{
	var cemento;
	var cal;
	var largo;
	var ancho;
	var areaDelTerreno;
	var cantidadBolsasCemento;
	var cantidadBolsasCal;
	var texto;

	cemento = 2;
	cal = 3;

	largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);

	ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    areaDelTerreno = largo * ancho;

    cantidadBolsasCemento = cemento * areaDelTerreno; 
    cantidadBolsasCal = cal * areaDelTerreno; 

	texto = "Para el contrapiso necesitas " + cantidadBolsasCemento + " bolsas de cemento y " + cantidadBolsasCal + " bolsas de cal";

	alert(texto);
}