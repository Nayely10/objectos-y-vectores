// crear objecto de datos
/*var  verduras = {
    "v1":"Tomate",
    v2 :"Cebolla",
    1: "Ajo",
    "v3": "zanahoria"

}
//mostrar los datos del objecto
document.write("dato:"+verduras.v1+"<br>");
document.write("dato:"+verduras.v2+"<br>");
document.write("dato:"+verduras[1]+"<br>");
*/
/*var varios ={
    "v1": "hola",
    "v2": 1234,
    "v3":function saludo(){
        alert("hola naye");
    },
    "v4": ["papa",345,"arroz"],
    "v5":{
        "f1": "Cilantro",
        "f2": "Perejil",
        "f3": ["Maggi","Comino",030303]
    }
}
document.write("dato:"+varios.v2+"<br>");
document.write("dato:"+varios.v3() +"<br>");
document.write("dato:"+varios.v4[1]+"<br>");
document.write("dato:"+varios.v5.f1+"<br>");
document.write("dato:"+varios.v5.f1[0]+"<br>");
*/
/*var casa ={
    "v1": ["licuadora","cuchara","freidora","asador"],
    "v2":{
        "n1": "espejo",
        "n2": "fotografia",
        "n3": "cama",
        "n4" : "closet"
    },
    "v3":function saludo(){
        alert("partes de la casa");
    }
}
document.write("dato:"+casa.v3()+"<br>");

document.write("dato:"+casa.v1[2]+"<br>");
document.write("dato:"+casa.v1[3]+"<br>");
document.write("dato:"+casa.v2.n2 +"<br>");
document.write("dato:"+casa.v2.n3 +"<br>");
*/



//llenar de manera estatica
var profesiones ={
    "nombre":"",
    "profesion":"",
    "salario":""
}
profesiones.nombre="lucas";
profesiones.profesion="maestro";
profesiones.salario=200.000;
document.write("nombre"+profesiones.nombre+"<br>");
document.write("profesion"+profesiones.profesion+"<br>");
document.write("salario"+profesiones.salario+"<br>");


//forma dinamica
var profes ={
    "nombre": "",
    "profesion": "",
    "salario": ""
}
for (var key in profes){
    var valores = prompt("Digite"+key);
    profes[key] = valores;
}
//mostrar datos del objecto
for (var k in profes){
    document.write(k+":"+profes[k]+"<br>");
}


//forma dinamica con varios datos
var empleados={
    "nombre": [],
    "departamento": [],
    "salario": []
}
var numEmpleados =parseInt(prompt("digite numero de empleados"));
for ( var llave in empleados){
    for (var x=0; x < numEmpleados; x++){
        empleados[llave][x]= prompt("Digite"+llave);

    }
}
/*for (const keys in empleados) {
    document.write(keys+"<br>");
    for (var y=0; y < Object.keys(empleados).length; y++){
        document.write(empleados[keys][y]+"<br>")
}

}
*/
for (var y=0; y < numEmpleados; y++){
    for (var keys in empleados){
        document.write(empleados[keys][y]+"<br>");
    }
}
