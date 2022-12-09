//-----------------------------------------------------------//
//----------VALORES TIPOS (Valores.js) y VARIABLES-----------//
//-----------------------------------------------------------//

//Tipos de datos//

//Valores Primitivos//
number = 40; //Numerico
string = "Anderson Gomez"; //String
boolean = true || false; //Booleano
error = null || undefined; //valores reservados de errores

//Valores No Primitivos//
array = [1,2,3]//Array tipo objeto
object = { nombre1: "Anderson" }; //Objeto 

//Saber que datos es//
console.log(typeof(array[1]));


//Variables//
//Declarar
var nombre2;
var edad;
//Inicializar 
nombre2 = "Anderson";
edad = 22;
//todo
var elementos = ["Computadora", "Celular"];
var persona = {
    nombre3: "Camilo",
    edad: 27,
}
console.log(persona);;

//-----------------------------------------------------------//
//--------------------------FUNCIONES------------------------//
//-----------------------------------------------------------//

//Declarativas//
function funcionDeclarativa() {
    return 3;
}

//Expresion//
var funcionExpresion = function (a,b) {
    return a + b;
}

//Instancimos para ejecutarlas//
funcionDeclarativa();
funcionExpresion();

function solution(valor) {
    console.log(typeof (valor));
}

//-----------------------------------------------------------//
//--------------------------SCOPE----------------------------//
//-----------------------------------------------------------//

/*
    Es el alcance que tienen las variables depende de donde se declare e 
    inicialice la variable donde se puede utilizar o no
    exiten los Scopes Global y Local.
*/

//Uso Correcto
var nombre4 = "JavaScript"
function saludar(){
    console.log("Hola " + nombre4)
}
saludar()

//Uso Incorrecto
/* 
    function saludo() {
        var nombre5 = "Andres"
        console.log(nombre5)
    }
    saludo()
    console.log(nombre5)
*/

//-----------------------------------------------------------//
//------------------------HOISTING---------------------------//
//-----------------------------------------------------------//

/*
    Es cuando las variables y las funciones se declaran antes 
    que se procese cualquier tipo de codigo
    Solo pasa con versiones Edma Script 5 en atras
    ahora las nuevas versiones presentaron las variables const y let
*/

console.log(nombre) // undefined
var nombre = "Andres" 

// Hoistin: Declara y asigna undefined
var nombre = undefined
console.log(nombre) // undefined
nombre = "Andres"

console.log( saludar() )
function saludar() {
  return "Hola"
}

// Hoisting: Declara la función antes de ser invocada
function saludar() {
    return "Hola"
  }
  
  console.log( saludar() ) // "Hola"
