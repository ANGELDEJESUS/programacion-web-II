
function randomElem<T>(theArray: T[]): T {
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}
 
let colors: string[] = ['violet', 'indigo', 'blue', 'green'];
let randomColor: string = randomElem(colors);



interface Persona {
    nombre: string
}
 
interface Familia {
    nombre: string,
    numero: number,
    relacion: string
}
 
interface Celebridad extends Persona {
    profesion: string
}
 
function printName<T extends Persona>(theInput: T): void {
    console.log(`Mi nombre es ${theInput.nombre}` + theInput.nombre);
}
 
let serena: Celebridad = {
    nombre: 'Serena Williams',
    profesion: 'Jugadora de Tenis'
}
 
printName(serena);
