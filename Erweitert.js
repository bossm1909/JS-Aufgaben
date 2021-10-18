//Properties online & participants möchte man in zwei Variablen schreiben
const course = {
    name: "Web Programming",
    lecturer: "Jens Reiner",
    location: "Heidenheim an der Brenz",
    online: false,
    participants: 25,
};

//ersten zwei Elemente in eine Variable & restlichen in andere Variable
const longList = [10,20,30,40,50,60,70,80,90];

//Extrahieren von Daten aus Arrays oder Objekten
const list = [10,20,30,40];
const [a,b] = list;
console.log(a); //10
console.log(b); //20

const course = {
    name: "Web Programming",
    lecturer: "Jens Reiner",
    location: "Heidenheim an der Brenz",
    online: false,
    participants: 25,
};
const {online} = course;
console.log(online); 
//Ausgabe: false

//Spread syntax
//Alle Elemente aus Array oder Objekt müssen in Art Liste übergeben werden
//Bsp: 3 Zahlen aus Array an Funktion übergeben
const numbers = [2,4,8];
function sum(x,y,z){
    return x+y+z;
}
console.log(sum(...numbers));
//Ausgabe: 14

//kann auch mit spread Operationen einfügen
let parts = ["shoulders", "knees"];
let lyrics = ["head", ...parts, "and", "toes"];
console.log(lyrics);
//Ausgabe: Head, shoulders, knees, and, toes

//kann auch zwei Objekte mergen
let obj1 = {first: "Hallo"};
let obj2 = {second: "World"};
let mergedObj = {...obj1, ...obj2};
console.log(mergedObj);
//Ausgabe: {first: "Hallo", second: "World"}

//Rest parameters
//erlaubt funktionen unbestimmte Anzahl an Parameter übergeben zu bekommen
function sum2(...numbers){
    return numbers.reduce((a,b) => a + b);
}
console.log(sum2(2,4,8));
//Ausgabe: 14

