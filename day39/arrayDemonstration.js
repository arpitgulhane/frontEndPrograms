let dogs=["Labra","Bulldog","NormalDog"]
let cat =new Array("americal crual","bengal")
let birds = new Array("falcons","ducks","flameingoes")

let sliceDogs=dogs.slice(1,2)
let copyDogs = [...dogs]
console.log(copyDogs)
let dogs2=dogs.slice(0)
console.log(dogs2)

let pushdog = dogs.push("golden")
console.log("pushdog"+pushdog)
let popDog= dogs.pop()
console.log("popDog"+popDog)
dogs2[dogs2.length]="poodle"
console.log(dogs2)
// // Add and Remove from First

let addFirst = dogs.unshift("golden"); 
let shiftDog =dogs.shift();
console.log(dogs)


// Atomic add and remove elements (where, how many to remove, element list) 
dogs2.splice(2, 1, "Pug", "Boxer");
console.log("splice "+dogs2)

// Array Function - Concat, Stice and Sort

let animals =dogs2.concat(cat, birds);
console.log("animals = "+animals)
let newAnimal =[...dogs, ... cat, ...birds].toString();
console.log("newAnimal = "+newAnimal)


let sortDog = dogs2.sort(); 
console.log("sortDog ="+sortDog)
function scanArray([first, second]) { 
    console.log("Scan = "+first + " " + second);
 }
scanArray(animals);

let joinAnimals = animals.join("");
console.log("joinAnimals = "+joinAnimals)

let allAnimals = ""; 
for (let animal of animals) allAnimals += animal + " ";

console.log("Animals:"+ allAnimals);

let name = prompt("Please enter your name:");
console.log("Hello " + name + "!");