/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/
function mostrar()// EJERCICIO 2
{
	var marca;
	var precio;
	var pesoKg;
	var tipo;
	var respuesta;
	var contador;
	var contadorPlata;
	var acumuladorPlata;
	var plataTotal;

	respuesta="si";
	contador=0;
	contadorPlata=0;
	acumuladorPlata=0;

	while(respuesta=="si")
	{
		marca=prompt("ingresar marca");

		precio=prompt("ingresar precio");
		precio=parseInt(precio);
		while(isNaN(precio)||precio<50||precio>1000)
		{
			precio=prompt("ingresar precio");
			precio=parseInt(precio);
		}

		pesoKg=prompt("ingresar pesoKg");
		pesoKg=parseInt(pesoKg);
		while(isNaN(pesoKg)||pesoKg<1||pesoKg>100)
		{
			pesoKg=prompt("ingresar pesoKg");
			pesoKg=parseInt(pesoKg);
		}

		tipo=prompt("ingresar tipo  del producto");
		while(tipo!="sólido"&&tipo!="líquido")
		{
			tipo=prompt("ingresar tipo  del producto");
		}

		if(precio)
		{
			acumuladorPlata=acumuladorPlata+precio;
			contadorPlata++;
		}


		contador++;
	}
	plataTotal=acumuladorPlata+contadorPlata;
	respuesta=prompt("¿continuara?");

	console.log("el precio total es: "+plataTotal);



}
