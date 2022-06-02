
let ingreso= prompt ("ingrese nombre");
let nombre= "carlos";
if (ingreso == nombre) {
    alert ("FUI YO");

    
} else {
    alert ("NO FUI YO");
}

let entradaDos= prompt("ingrese letra")
if ((entradaDos == "y") || (entradaDos="Y")) {
    alert("correcto");
    
} else {
alert("error");    
}

let entradaTres= prompt("seleccionar un numero del uno al cuatro")

if (entradaTres==1) {
    alert("seleccionaste a bart")
} 
else if (entradaTres==2) {
    alert("seleccionaste a lisa")
    
} else if (entradaTres==3){
    alert("seleccionaste a  marge")
    
}
else if (entradaTres==4) { 
    alert ("seleccionaste a homero")
}
else {
    alert("error")
}

let entrada4= prompt("ingrese valor")

if ((0<=entrada4) && (entrada4<=1000)) {
    alert("presupuesto bajo")
}
else if ((entrada4>=1001) && (entrada4<=3000)) {
    alert("presupuesto medio")
}

else if (3000<entrada4 ){
alert("presupuesto alto")
}

else {
    alert("error")
}
