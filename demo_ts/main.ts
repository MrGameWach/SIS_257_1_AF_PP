// Esto es un comentario en una sóla línea
/* Esto es un comentario
  en múltiples líneas
*/

// Tipos de Datos
// Boolean y ámbito de variables
let esActivo: boolean = true; // En el contexto acual
var esActivo2: boolean = false; // El contexto es en todo el archivo
const esActivo3: boolean = false; // Constante de sólo lectura

// Number
let entero: number = 54;
let real: number = 7.13;
let binario: number = 0b101;
let octal: number = 0o11;
let hexadecimal: number = 0xa;
let enteroLargo: number = 5465465465;

// String
let sigla: string = 'SIS257';
let materia: string = 'Desarrollo de Aplicación Int/Internet II ';
let concatenar: string = sigla + ' - ' + materia;
let concatenar2: string = `${sigla} - ${materia}`;
let mayuscula: string = materia.toUpperCase();
let minuscula: string = materia.toLowerCase();
let reemplazo1raOcurrencia: string = materia.replace(' ', '');
let reemplazoTodasOcurrencias: string = materia.replace(/ /g, '');
let subcadena: string = materia.substring(0, 12);
let repetir: string = sigla.repeat(5);
let quitarEspaciosExtremos: string = materia.trim();
let longitudCadena: number = quitarEspaciosExtremos.length;
let separarCadena: string[] = materia.split(' ');

// Array
let array: string[] = ['uno', 'dos', 'tres'];
let arrayNumerico: number[] = [1, 2, 3];
let longitudArray: number = array.length;
let doble = arrayNumerico.map((n) => n * 2);
let factorial = arrayNumerico.reduce((prev, next) => prev * next);
let impares = arrayNumerico.filter((n) => n % 2 != 0);
array.push('cuatro');
array.push('cinco');
array.shift();
array.pop();

let nuevoArray: number[] = [];
for (let i = 0; i < arrayNumerico.length; i++) {
  nuevoArray.push(arrayNumerico[i] * 2);
}

// Tuple
let tuple = [true, 50, 'SIS257', 30.56, [5, 6, 7]];

// Enum
enum sexo { M = 'Masculino', F = 'Femenino' }
enum color { R = 'Rojo', G = 'Verde', Y = 'Amarrillo' }
enum tipo { par = 0, impar = 1 }

// Any
let cualquiera: any = 'HOLA';
cualquiera = 5;
cualquiera = undefined;
let noDefinido;

// Object
let objeto: Object = { nombre: 'Juan', apellido: 'Pérez' };

// Estructuras de control
let contiene: boolean;
if (materia.includes('Desarrollo')) contiene = true;
else if (materia.startsWith('Des')) contiene = true;
else contiene = false;

for(let i = 0; i < array.length; i++) console.log('Ciclo for: ' + array[i]); // Opción 1
for(let i in array) console.log('For in: ' + i);
for(let i of array) console.log('For of: ' + i); // Opción 2
array.forEach(i=> console.log('forEach: ' + i)); // Opción 3

// Interfaces
interface Persona {
  cedulaIdentidad: string,
  nombreCompleto: string,
  fechaNacimiento: Date,
};

let juan: Persona = { cedulaIdentidad: '123', nombreCompleto: 'Juan Pérez', fechaNacimiento: new Date('2000-03-15') };

// Funciones o métodos
function saludar(nombre: string) {
  // Comentarios
  console.log(`Hola ${nombre}`);
}

saludar('Juan');
