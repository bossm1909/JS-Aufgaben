//Wert hat immer Datentyp -> gibt 8
let input = "Foo";
input = 1337;

//Zahlen/Nummern müssen nicht deklariert werden
//Heißt kein int oder float hinschreiben
let number = 1337;
number = 42.42;

//Gibt BigInt (Zahlen > 2^53-1)
const largNumber = 12345678901234678901234567890n;

//Strings mit "" oder ''
const aString = "Hello World";
const bString = 'Hello World';
//Verkettung mit +
const h = "Hello";
const w = "World";
console.log(h + " " + w); 
//Ausgabe: Hello World

//Template Strings mit `` & können gleichzeitig Funktionen ausführen
const number = 800;
const price = `The price of the new phone is ${number};`
console.log(price) 
//Ausgabe: The price of the new phone is 800;

//String Zusammenfassung
const phone = 800;
const discount = 25;
const price = `The price of the new phone is ${phone - ((phone / 100) * discount)}`;
console.log(price)
//Ausgabe: The price of the new phone is 600

const phone = 800;
const discount = 25;
const price = `The price of the new phone is ${phone} with a discount of ${discount}`;
console.log(price);
//Ausgabe: The price of the new phone is 800 with a discount of 25

//Boolean -> true or false
const confirmed = false;
const approved = true;

//Null & Undefined
//Null repräsentiert nothing, empty oder wert unbekannt
//Undefined -> Variable wurde noch keinen Wert zugewiesen
const username = null; //null

const username;
console.log(username) //undefined

//Objekte
//können verschiedene Properties beinhalten
//Jedes Property hat einen Wert -> Property ist Schlüssel um auf Wert zuzugreifen
//Objekte mit {} definieren
const user = {
    name: "Jens",
    age: 25,
    gender: "m",
    isAdmin: true
}
//Objekte können Variablen zugeordnet werden
const phone = {
    manufacturer: "Apple",
    model: "iPhone",
    storage: 128,
    isReleased: false
}
//können auch leer definiert werden
//haben einen key & dazugehörigen Wert
//{<key>: <value>}

//können auch ausgelesen werden im Obejekt
//(.Notation)
console.log(user.name) 
//Ausgabe: Maren

//Kann mit Notation auch neue Werte hinzufügen
let machine = {
    serialNo: 1234,
    name: "Fast Machine"
}
machine.price = 2500;
console.log(machine);
//Ausgabe: Object {serialNo: 1234, name: "Fast Machine", price: 2500}

//Entfernt Properties mit delete 
delete machine.price
console.log(machine);
//Ausgabe: Object {serialNo: 1234, name: "Fast Machine"}

//Properties verändern mit .Notation
machine.serialNo = 42;
console.log(machine);
//Ausgabe: Object {serialNo: 42, name: "Fast Machine"}

//key von Property kann auch multi-word sein
// .Notation funktioniert hier nicht
let factory = {
    "construction site": "Heidenheim an der Brenz"
};
console.log(factory);
//Ausgabe: Object {"construction site": "Heidenheim an der Brenz"}

//Um multi-word zuzugreifen verwendet man []
console.log(factory["construction site"]);
//Ausgabe: Heidenheim an der Brenz

//[] geht auch bei Variablen
const key = "construction site"
console.log(facory[key]);
//Ausgabe: Heidenheim an der Brenz

//[] kann auch keys in properties definieren
const fruit = "apple";
const bag = {
    [fruit]: 5
}
console.log(bag);
//Ausgabe: Object {apple: 5}

//Um herauszufinden was für Datentyp eine Variable ist gibt es typeof
const price = 25;
console.log(typeof price); //number
console.log(typeof "Foo"); //string
console.log(typeof null); //object

