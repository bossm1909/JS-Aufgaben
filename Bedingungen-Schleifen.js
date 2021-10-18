//Bedingungen mit if
//evaluiert Ausdruck & springt in nächsten Block, wenn Bedingung zutrifft (true)
const price = 800;
const discount = 200;
let canPurchase;

//When price is equal or lower than 600 we want to purchase it
if ((price - discount) <= 600) {
    canPurchase = true;
} else { //When price is larger than 600 we can not purchase it
    canPurchase = false;
}
console.log(canPurchase); //true

//die zu prüfende Bedingung wird in Boolean umgewandelt
//0, "", null, undeined & NaN werden false
let userInput = null;
let hasUserInput;
if(userInput){
    hasUserInput = true;
} else {
    hasUserInput = false;
}
console.log(hasUserInput) 
//Ausgabe: false

//Verzweigungen mit else und else if
//if auch ohne Verzweigung verwendet werden

const price = 2000;
if (price < 2000){
    console.log('Cheap!')
} else if (price > 2000) {
    console.log('Expensive!')
} else {
    console.log('Perfect!')
}
//Ausgabe: Perfect

//Switch
//Mehrere if zu einem switch
//Switch hat einen oder n case Abschnitt & optionalen default
//case mit break beendet
let price = 2000
switch(price) {
    case 1000:
        console.log("Price is 1000")
        break;
    case 1500:
        console.log("Price is 1500")
        break;
    case 2000:
        console.log("Price is 2000")
        break;
        default:
        console.log("Price is ${price}")
}

//Schleifen
//Mit break Schleife abbrechen
//Mit continue zur nächsten Iteration springen
//For -> wdh. so lange bis Bed. nicht mehr erfüllt ist
for (begin; condition; step){
    //repeat until false
}
for (let i = 0; i <= 100; i++){
    console.log(i);
}

//Do-while -> wdh. sich bis eine Bed. erfüllt
//wird erst nach ersten Durchlauf geprüft
do 
    statement 
while (condition);
let i = 0;
do {
    console.log(i)
    i++
} while (i <= 100);

//While -> wdh. sich solange bis Bed. erfüllt
// wird vor ersten Durchlauf geprüft
while(condition){
}
let i = 0;
while (i <= 100){
    console.log(i);
    i++;
}

//For...In
//kann über Objekt properties loopen
const user = {
    name: "Jens",
    age: 25,
    gender: "m",
}
for (const i in user){
    console.log(i);
}
//Ausgabe: name, age, gender

//For...of
//iteriert über iterierbare Objekte (String, Array, Map, Set)
const array1 = ["A", "B", "C", "D"];
for (const char of array1){
    console.log(char);
}
//Ausgabe: A,B,C,D

