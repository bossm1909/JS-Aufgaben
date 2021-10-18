//Funktionen mit function deklariert
//beliebige Parameter können übergeben werden
//geben undefined immer zurück
//Wertrückgabe mit return
//Funktionen sind Objekte in JS
function square(number){
    return number*number;
}
console.log(square(5));
//Ausgabe: 25

//Primitive Parameter mit pass by value
//Nicht primitive Parameter mit pass by reference
var phone = {
    make: "Apple",
    model: "iPhone",
    year: "2021"
}
console.log(phone.year); //2021

function updatePhone(phone){
    phone.year = "1995";
}
updatePhone(phone);
console.log(phone.year); //1995

//kann auch anonym dekl. werden
//Unterschied is Name
const square = function(number) {return number * number};
console.log(square(5))
//Ausgabe: 25

//Parameter
function addPrefix(input, prefix = "id:"){
    return `${prefix} ${input}`;
}
console.log(addPrefix("Test")); //id: Text
console.log(addPrefix("iPhone", "unreleased")) //unreleased iPhone

//Funktionen können acuh als Parameter übergeben werden
const upperCase = function(value){return value.toUpperCase()}
function transformUserInput(uppercase, input){
    return upperCase(input);
}
console.log(transformUserInput(upperCase, "Hallo Welt"));
//Ausgabe: HALLO WELT

//Arrow Functions =>
//Haben Einschränkungen ggb. normale Funktionen
//Geben implizit Rückgabewert zurück
const sum = (a,b) => a + b;
console.log(sum(25,10));
//Ausgabe: 35

