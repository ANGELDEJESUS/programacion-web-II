// With strictNullChecks set to true 
let a: null = null; // Ok 
let b: undefined = null; // Error 
let c: number = null; // Error 
let d: void = null; // Error
 
// With strictNullChecks set to false 
let a: null = null; // Ok 
let b: undefined = null; // Ok 
let c: number = null; // Ok 
let d: void = null; // Ok

//El Tipo de Datos Indefinido

// With strictNullChecks set to true 
let a: undefined = undefined; // Ok 
let b: undefined = null; // Error 
let c: number = undefined; // Error 
let d: void = undefined; // Ok
 
// With strictNullChecks set to false 
let a: undefined = undefined; // Ok 
let b: undefined = null; // Ok 
let c: number = undefined; // Ok 
let d: void = undefined; // Ok

//El Tipo de Datos Void

// With strictNullChecks set to true 
let a: void = undefined; // Ok 
let b: void = null; // Error 
let c: void = 3; // Error 
let d: void = "apple"; // Error
 
// With strictNullChecks set to false 
let a: void = undefined; // Ok 
let b: void = null; // Ok 
let c: void = 3; // Error 
let d: void = "apple";  // Error

//El Tipo de Datos Boolean

let a: boolean = true; 
let b: boolean = false; 
let c: boolean = 23; // Error let d: boolean = "blue"; // Error

//El Tipo de Datos Numérico

let a = undefined; 
let b = null; 
let c = 3;
let d = 0b111001; 
let e = 0o436;
let f = 0xadf0d; 
let g = "cat";

//El Tipo de Datos String

let e: string = "building"; let f: number = 300;
 
let sentence: string = `The ${e} in front of my office is ${f} feet tall.`;

//Los tipos de datos Array y Tuple

// With strictNullChecks set to false 
let a: number[] = [1, 12, 93, 5]; 
let b: string[] = ["a", "apricot", "mango"]; 
let c: number[] = [1, "apple", "potato"]; // Error
 
let d: Array<number> = [null, undefined, 10, 15]; let e: Array<string> = ["pie", null, ""];
 
 
// With strictNullChecks set to true 
let a: number[] = [1, 12, 93, 5]; 
let b: string[] = ["a", "apricot", "mango"];
 let c: number[] = [1, "apple", "potato"]; // Error
 
let d: Array<number> = [null, undefined, 10, 15]; // Error let e: Array<string> = ["pie", null, ""]; // Error

let a: [number, string] = [11, "monday"]; 
let b: [number, string] = ["monday", 11]; // Error 
let c: [number, string] = ["a", "monkey"]; // Error 
let d: [number, string] = [105, "owl", 129, 45, "cat"];
let e: [number, string] = [13, "bat", "spiderman", 2];
 
e[13] = "elephant";
e[15] = false; // Error

//El Tipo de Datos Enum

enum Animals {cat, lion, dog, cow, monkey} 
let c: Animals = Animals.cat;
 
console.log(Animals[3]); // cow 
console.log(Animals.monkey); // 4

//Los tipos Any y Never

let a: never; // Ok 
let b: never = false; // Error 
let c: never = null; // Error 
let d: never = "monday"; // Error
 
function stuck(): never {    while (true) {    } }

