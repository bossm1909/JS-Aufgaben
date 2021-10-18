//Arrays
//mit [] deklariert
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];

//mit property Selektor ausgewählt
//haben immer einen integer index
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];
console.log(cars[2]) //BMW
console.log(cars["length"]) //4

//Push Element an Ende von Array hinzufügen
const cars = ["Mercedes"];
cars.push("Audi");
console.log(cars);
//Ausgabe: Array ["Mercedes", "Audi"]

//Pop Letztes Element entfernen
const cars = ["Mercedes", "Audi"];
cars.pop();
console.log(cars);
//Ausgabe: ["Mercedes"]

//Shift Erstes Element entfernen & zurückgeben
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];
const car = cars.shift();
console.log(car); //Mercedes
console.log(cars.length) //3

//Unshift Element an Anfang hinzufügen
const cars = ["Mercedes"];
cars.unshift("Audi");
console.log(cars);
//Ausgabe: ["Audi", "Mercedes"]

//Schleifen bei Arrays
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];
for (let i = 0; i <= cars.length; i++){
    console.log(cars[i]);
}
//Ausgabe: Mercedes, Audi, BMW, Volkswagen
//oder
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];
for (let car of cars){
    console.log(car);
}
//Ausgabe: Mercedes, Audi, BMW, Volkswagen
//oder
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];
cars.forEach(car => {
    console.log(car);
})
//Ausgabe: Mercedes, Audi, BMW, Volkswagen

//map -> alle elemente werden zurückgegeben
const roles = ["create", "read", "update", "delete"];
const mappedRoles = roles.map((role) => role.toUpperCase());
console.log(mappedRoles);
//Ausgabe: Create, Read, Update, Delete

//filter -> Element was true hat wird zurückgegeben
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen", "Porsche"];
const vwGroup = cars.filter((car) => car === "Audi" || car === "Volkswagen" || car === "Porsche");
console.log(vwGroup);
//Ausgabe: Audi, Volkswagen, Porsche

//every -> true Ausgabe, wenn für alle Elemente true ist
const numbers = [1,2,"3",4,"5"];
const onlyNumbers = numbers.every((value) => typeof value === "number");
console.log(onlyNumbers);
//Ausgabe: false

//some -> true Ausgabe, wenn für mind. ein Element true ist
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen", "Porsche"];
const hasAudi = cars.some((car) => car === "Audi");
console.log(hasAudi);
//Ausgabe: true

