/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var nombre;
	var temp;
	var sexo;
	var edad;
	var contador;
	var contadorSexoF;
	var contadorSexoM;
	var acumuladorEdad;
	var contadorEdad;
	var promedioEdad;
	var mujerConFiebre;
	var contadorFiebre;
	var maxTemp;
	var contadorMaxTemp;

	contador=0;
	contadorSexoF=0;
	contadorSexoM=0;
	contadorEdad=0;
	acumuladorEdad=0;
	contadorFiebre=0;
	maxTemp>36;

	while(contador<5)
	{
		nombre=prompt("Poner el nombre");

		temp=prompt("Poner la temperatura");
		temp=parseInt(temp);

		while(isNaN(temp)||temp<35||temp>41)
		{
			temp=prompt("Poner la temperatura");
			temp=parseInt(temp);
		}

		edad=prompt("Poner la edad");
		edad=parseInt(edad);
		while(isNaN(edad)||edad<1||edad>110)
		{
			edad=prompt("Poner la edaderatura");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingrese sexo");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Ingrese sexo");
		}

		if(sexo=="f")// A)
		{
			contadorSexoF++;
		}else
		{
			contadorSexoM++;
		}

		if(edad)// B)
		{
			acumuladorEdad=acumuladorEdad+edad;
			contadorEdad++;
		}
		if(sexo=="f"&& mujerConFiebre)// C)
		{
			if(temp<maxTemp)
			{
				temp=maxTemp
				contadorMaxTemp++;
			}
			mujerConFiebre=nombre;
			contadorFiebre++;

		}


		contador++;

	}
	promedioEdad=acumuladorEdad/contadorEdad;
	promedioEdad=parseInt(promedioEdad);

	console.log("el total de hombres es: "+contadorSexoM+" y el total de mujer es: "+contadorSexoF);
	console.log("el promedio de edad es : "+promedioEdad);
	console.log("la mujer con fiebre es: "+ mujerConFiebre);


}
