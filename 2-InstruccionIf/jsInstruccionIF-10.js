/* Violante Martín - DIV Z - IF/ELSE 10
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	let notaExamen;
	let maximo;
	let minimo;

	maximo = 10;
	minimo = 1;

	numeroRandom = Math.floor(Math.random() *(maximo + 1 - minimo)) + minimo;

	if(notaExamen > 8)
	{
		alert("Excelente, su nota es " + notaExamen);
	}
	else
	{
		if(notaExamen > 3 && notaExamen < 9)
		{
			alert("Aprobado, su nota es " + notaExamen);
		}
		else
		{
			alert("Vamos, la próxima se puede. Su nota es " + notaExamen)
		}
	
	}

}