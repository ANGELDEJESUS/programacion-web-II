function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var colors = ['violet', 'indigo', 'blue', 'green'];
var randomColor = randomElem(colors);
function printName(theInput) {
    console.log("Mi nombre es " + theInput.nombre + theInput.nombre);
}
var serena = {
    nombre: 'Serena Williams',
    profesion: 'Jugadora de Tenis'
};
printName(serena);
