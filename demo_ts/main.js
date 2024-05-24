"use strict";
// Esto es un comentario en una sóla línea
/* Esto es un comentario
  en múltiples líneas
*/
// Tipos de Datos
// Boolean y ámbito de variables
let esActivo = true; // En el contexto acual
var esActivo2 = false; // El contexto es en todo el archivo
const esActivo3 = false; // Constante de sólo lectura
// Number
let entero = 54;
let real = 7.13;
let binario = 0b101;
let octal = 0o11;
let hexadecimal = 0xa;
let enteroLargo = 5465465465;
// String
let sigla = 'SIS257';
let materia = 'Desarrollo de Aplicación Int/Internet II ';
let concatenar = sigla + ' - ' + materia;
let concatenar2 = `${sigla} - ${materia}`;
let mayuscula = materia.toUpperCase();
let minuscula = materia.toLowerCase();
let reemplazo1raOcurrencia = materia.replace(' ', '');
let reemplazoTodasOcurrencias = materia.replace(/ /g, '');
let subcadena = materia.substring(0, 12);
let repetir = sigla.repeat(5);
let quitarEspaciosExtremos = materia.trim();
let longitudCadena = quitarEspaciosExtremos.length;
let separarCadena = materia.split(' ');
// Array
let array = ['uno', 'dos', 'tres'];
let arrayNumerico = [1, 2, 3];
let longitudArray = array.length;
let doble = arrayNumerico.map((n) => n * 2);
let factorial = arrayNumerico.reduce((prev, next) => prev * next);
let impares = arrayNumerico.filter((n) => n % 2 != 0);
array.push('cuatro');
array.push('cinco');
array.shift();
array.pop();
let nuevoArray = [];
for (let i = 0; i < arrayNumerico.length; i++) {
    nuevoArray.push(arrayNumerico[i] * 2);
}
// Tuple
let tuple = [true, 50, 'SIS257', 30.56, [5, 6, 7]];
// Enum
var sexo;
(function (sexo) {
    sexo["M"] = "Masculino";
    sexo["F"] = "Femenino";
})(sexo || (sexo = {}));
var color;
(function (color) {
    color["R"] = "Rojo";
    color["G"] = "Verde";
    color["Y"] = "Amarrillo";
})(color || (color = {}));
var tipo;
(function (tipo) {
    tipo[tipo["par"] = 0] = "par";
    tipo[tipo["impar"] = 1] = "impar";
})(tipo || (tipo = {}));
// Any
let cualquiera = 'HOLA';
cualquiera = 5;
cualquiera = undefined;
let noDefinido;
// Object
let objeto = { nombre: 'Juan', apellido: 'Pérez' };
// Estructuras de control
let contiene;
if (materia.includes('Desarrollo'))
    contiene = true;
else if (materia.startsWith('Des'))
    contiene = true;
else
    contiene = false;
for (let i = 0; i < array.length; i++)
    console.log('Ciclo for: ' + array[i]); // Opción 1
for (let i in array)
    console.log('For in: ' + i);
for (let i of array)
    console.log('For of: ' + i); // Opción 2
array.forEach(i => console.log('forEach: ' + i)); // Opción 3
;
let juan = { cedulaIdentidad: '123', nombreCompleto: 'Juan Pérez', fechaNacimiento: new Date('2000-03-15') };
// Funciones o métodos
function saludar(nombre) {
    // Comentarios
    console.log(`Hola ${nombre}`);
}
saludar('Juan');
