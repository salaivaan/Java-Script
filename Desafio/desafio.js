let nombre = "Maria Belen";
let apellido= "Mendez";
let edad= 26;

console.log(nombre);
console.log(apellido);
console.log(edad);

const ciudadUno= "Lomas de Zamora";
const ciudadDos= "Lanus";
const ciudadTres= "Capital";
const ciudadCuatro= "Olavarria";
const ciudadCinco= "Trelew";

console.log (ciudadUno);
console.log (ciudadDos);
console.log (ciudadTres);
console.log (ciudadCuatro);
console.log (ciudadCinco);


const fechaDeNacimiento= 24;
const mesDeNacimiento= 06;
const anioDeNacimiento= 1996;
const espacio=" ";
let dni=39107459;
let nacionalidad= "argentina";
let cedula= nombre + espacio + apellido + espacio + dni + espacio + fechaDeNacimiento + espacio + mesDeNacimiento + espacio +anioDeNacimiento + espacio + ciudadUno + espacio + nacionalidad;
console.log(cedula)

let madre = prompt("ingrese nombre madre") ;
let padre = prompt ("ingrese nombre padre");
let hijoUno = prompt ("ingrese nombre hijo") ;
let hijoDos = prompt ("ingrese nombre hijo");
let hijoTres = prompt ("ingrese nombre hijo");

let familia = madre + espacio + padre + espacio + hijoUno + espacio + hijoDos + espacio +hijoTres;

alert (familia);

let precio = prompt("ingresar precio");
let descuentoUno= precio - (precio*0.2);
let descuentoDos= precio - (precio*0.30);
console.log(descuentoUno);
console.log(descuentoDos);
