//Binäre Operatoren für vergleichen von Werten
console.log(3>2); //true
console.log (3<2); //false

console.log(25>=10); //true
console.log(100 <= 50); //false

console.log("Apple" == "Orange") //false
console.log("Apple" != "Cherry") //true

//Werte vergleichen
//== Abstract Equality (Datentyp Umwandlung)
//=== Strict Equality (Keine Umwandlung)
//Beim Vergleichen von Zwei Variablen immer ===

//Logische Operatoren
console.log(true && false) //false
console.log(true && true) //true

console.log(true || false) //true
console.log(false || false) //false

//unary operator
console.log(!true) //false
console.log(!false) //true

//ternary operator "?"
//Nimmt Bedingung & wertet diese aus
//Ist true wird left hand operator ausgeführt
//Ist false wird right hand operator ausgeführt
console.log(true ? 1 : 2); //1
console.log(false ? 1 : 2); //2
