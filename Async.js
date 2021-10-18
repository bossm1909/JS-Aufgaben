//asynchrone Funktion -> geben immer Promise zurück
//Das Promise Objekt stellt eine Repräsentation einer eventuellen Ausführung (oder eines Fehlschlags) einer asynchronen Operation und den daraus resultierenden Ergebnissen dar.
//then -> bekommt wert zurück
function test() {return "Hello World"};
test();     
//Ausgabe: Hello World

async function test() {return "Hello World"};
test();     
//Ausgabe: Promise

//Um eigenen Wert anzuzeigen, wird Promise mit "then" erweitert
async function test() {return "Hello World"};
test();     //Promise
test().then((value) => console.log(value));
//Ausgabe: Hello World

//await -> nur in Kombi mit Async Funktion
//Wird vor Promise-Based-Funktion geschrieben um auf Ergebnis der Promise zu warten
async function test() {
    return await Promise.resolve("Hello World");
}
test().then((value) => console.log(value));
//Ausgabe: Hello World
