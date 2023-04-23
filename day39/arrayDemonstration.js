let dogs=["Labra","Bulldog","NormalDog"]
let cat =new Array["americal crual","bengal"]
let birds = new Array["falcons","ducks","flameingoes"]

let sliceDogs=dogs.slice(1,2)
let copyDogs = [...dogs]
let dogs2=dogs.slice[0]

let pushdog = dogs.push("golden")
let popDog= dogs.pop()
dogs2[dogs2.length]="poodle"

// Add and Remove from First

let addFirst = dogs.unshift("golden"); 
let shiftDog =dogs.shift();

// Atomic add and remove elements (where, how many to remove, element list) dogs.splice(2, 1, "Pug", "Boxer");

// Array Function - Concat, Stice and Sort

let animals dogs.concat(cats, birds);

let newAnimal I...dogs, ... cats, ...birds].toString();


let sortDog dogs.slice(0).sort(); function scanArray([first, second]) { console.log("Scan: "+first + " " + second); }

scanArray(animals);

let joinAnimals animals.join("");

let allAnimals = ""; for (let animal of animals) allAnimals += animal + " ";

console.log("Animals: allAnimals);
let origDogs ("Bulldog", "Beagle", "Labrador");

let cats new Array("Americal Curl", "Bengal"); 
let birds new Array("Falcons", "Ducks", "Flamingoes");