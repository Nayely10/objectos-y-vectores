/*var verduras = [ 
"Tomate",
"Cebolla",
"Pepino",
"Aguacate",
"Cilantro"
];
document.write("La verdura es:"+verduras[1]+"<br>");//para mostrar la posicion en la que esta  = [1] puedo cambiar posicion

document.write("El total de verduras es:"+verduras.length+ "<br>") //para contar cuantas hay en numeros
for(var x = 0; x <verduras.length; x++){
document.write("La verdura es:"+verduras[x]+"<br>");//para mostrar cuales ahi en nombres

}
*/
//como meterle informacion
/*var cosasCocina = [];//llenar un vector
for(var r =0; r < 5; r++){
    var cosas = prompt("Digite el nombre de utencio de cocina");
    cosasCocina[r]=cosas;
}

//mostrar datos del vector
for(var y =0; y < cosasCocina.length; y++){
    document.write("Utencios son:" +y+""+cosasCocina[y]+"<br>");
}
*/

/*var cosasAseo = [];//llenar un vector
var uni = parseInt(prompt("Digete cuantos articulos quiere comprar"))
for(var r =1; r <= uni; r++){
    var cosas = prompt("Digite el nombre de articulos de Aseo");
    cosasAseo[r]=cosas;
}

//mostrar datos del vector
for(var y =1; y < cosasAseo.length; y++){
    document.write("Articulos  son:" +y+""+cosasAseo[y]+"<br>");
}
*/

//consultar minimo 3 funciones 
//de los vectores/arreglod
//y un ejemplo de cada uno


//Usa el método push() para añadir un elemento en el arreglo. 
//El método push() añade un elemento  al final del arreglo. 

var ensalada = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
ensalada.push('🥜');
document.write("Los ingredientes  son:"+ensalada);

//si tu quieres añadir un elemento al inicio del arreglo, vas a necesitar  usar el método unshift().

var  ensalada = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
ensalada.unshift('🥜');
document.write("Los ingredientes  son:"+ensalada);

//Usa el método shift() para eliminar un elemento desde el principio del arreglo.
// Como el método pop(),  shift()  regresa el elemento eliminado y cambia el arreglo original.
var ensalada = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
ensalada.shift(); // 🍅
document.write("Los ingredientes  son:"+ensalada);

//Podemos cambiar el valor de dos variables fácilmente usando la sintaxis de desestructuración de arreglo.
var primero = '😔';
var segundo = '🙂';
[primero, segundo] = [segundo, primero];

console.log(primero);  // '🙂'
console.log(segundo); // '😔'
document.write(primero,segundo)